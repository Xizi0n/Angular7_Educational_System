import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: any = {};

  constructor(
    private auth: AuthService,
    private router: Router,
    private forumService: ForumService
  ) {}

  ngOnInit() {
    this.user.email = "admin@admin.com";
    this.user.password = "Asdqwe1";

    //this.forumService.getTopics();
  }

  login() {
    if (this.user !== null && this.user !== undefined) {
      this.auth.login(this.user).subscribe(
        response => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("userId", response.userId);
          localStorage.setItem("role", response.role);
          localStorage.setItem("imageUrl", response.image);
          this.auth.isAuthenticated = true;
          this.auth.canEdit =
            localStorage.getItem("role") === "admin" ||
            localStorage.getItem("role") === "teacher"
              ? true
              : false;
          this.auth.isAdmin = localStorage.getItem("role") === "admin";
          this.router.navigateByUrl("/kurzusok");
          setTimeout(() => {
            this.auth.logout();
          }, 60 * 60 * 1000);
        },
        error => {
          console.log("ERROR: " + JSON.stringify(error));
        }
      );
    }
    console.log(this.user);
  }
}
