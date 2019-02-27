import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dropdownToogle = false;
  enableNotifications = true;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe(
      response => {
        console.log(JSON.stringify(response));
        this.auth.isAuthenticated = false;
        this.auth.loggedinUser = {};
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }, error => {
        console.log('ERROR: ' + JSON.stringify(error));
      });
  }
  toggleDropdown() {
    this.dropdownToogle = !this.dropdownToogle;
  }
  toggleNotifications() {
    this.enableNotifications = !this.enableNotifications;
  }

}
