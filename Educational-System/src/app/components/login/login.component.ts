import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {};

  constructor(private auth: AuthService, private router: Router, private forumService: ForumService) { }

  ngOnInit() {
    this.user.email = 'valaki@gmail.com';
    this.user.password = 'ASDQWE4';

    this.forumService.getTopics();
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
          this.auth.loggedinUser =  response.user;
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
