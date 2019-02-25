import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: any = {};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.email = 'valaki@asd.com';
    this.user.password = 'asd';
  }

  login() {
    if (this.user !== null && this.user !== undefined) {
      this.auth.login(this.user).subscribe(
        response => {
          localStorage.setItem('token', response.id );
          localStorage.setItem('name', response.user.name);
          localStorage.setItem('email', response.user.email);
          console.log('response: ' +  JSON.stringify(response));
          this.auth.isAuthenticated = true;
          this.auth.loggedinUser =  {
            name: response.user.name,
            email: response.user.email
          };
          this.router.navigateByUrl('/kurzusok');
          console.log('loggedinUSER' + JSON.stringify(this.auth.loggedinUser));
        },
        error => {
          console.log('ERROR: ' + JSON.stringify(error));
        }
      );
    }
    console.log(this.user);
  }

}
