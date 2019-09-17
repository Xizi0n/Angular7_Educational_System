import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  dropdownToogle = false;
  enableNotifications = true;
  imageUrl = environment.BaseImageUrl;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.profilePicture$.subscribe(name => {
      this.imageUrl = environment.BaseImageUrl + name;
    });
    //this.imageUrl = this.imageUrl + localStorage.getItem("imageUrl");
  }

  logout() {
    this.auth.logout();
  }
  toggleDropdown() {
    this.dropdownToogle = !this.dropdownToogle;
  }
  toggleNotifications() {
    this.enableNotifications = !this.enableNotifications;
  }

  toggleEditMode() {
    this.auth.isEditMode = !this.auth.isEditMode;
  }
}
