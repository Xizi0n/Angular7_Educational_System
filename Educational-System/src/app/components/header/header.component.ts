import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  dropdownToogle = false;
  enableNotifications = true;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {}

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
