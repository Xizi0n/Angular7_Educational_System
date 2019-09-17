import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuthenticated = false;
  loggedinUser: any;
  canEdit = false;
  isEditMode = false;
  profilePicture = localStorage.getItem("imageUrl") || "default.jpg";
  profilePicture$ = new BehaviorSubject(this.profilePicture);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user) {
    console.log(user.email);
    return this.http.post(environment.BaseUrl + "/auth/signup", {
      email: user.email,
      password: user.password,
      name: user.name,
      department: user.department
    });
  }

  login(user): any {
    // tslint:disable-next-line: quotemark
    return this.http.post(environment.BaseUrl + "/auth/login", {
      email: user.email,
      password: user.password
    });
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated = false;
    this.loggedinUser = {};
    this.router.navigateByUrl("/login");
  }

  isAutheticated() {
    return this.isAuthenticated;
  }
}
