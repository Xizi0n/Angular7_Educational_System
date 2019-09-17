import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  fileSelector;
  imageUrl = environment.BaseImageUrl;
  user;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private userService: UserService
  ) {}

  buildFileSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("name", "image");
    fileSelector.addEventListener("change", e => this.fileChanged(e));
    return fileSelector;
  }

  ngOnInit() {
    this.auth.profilePicture$.subscribe(name => {
      this.imageUrl = environment.BaseImageUrl + name;
    });
    this.fileSelector = this.buildFileSelector();
    this.userService.getUser(localStorage.getItem("userId")).subscribe(res => {
      this.user = res;
    });
  }

  uploadfile() {
    this.fileSelector.click();
  }

  fileChanged(e) {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    this.http
      .post(environment.UploadImageUrl, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .subscribe((data: any) => {
        console.log("[PostImage data]:", data);
        this.auth.profilePicture$.next(data.name);
      });
  }
}
