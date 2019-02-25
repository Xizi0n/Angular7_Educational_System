import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoopBackConfig } from '../shared/sdk';
import { UserApi } from '../shared/sdk';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  loggedinUser = {};

  constructor(private http: HttpClient, private userApi: UserApi) {
    LoopBackConfig.setBaseURL(environment.loopBackBaseUrl);
    LoopBackConfig.setApiVersion(environment.loopBackApi);
  }

  signUp(user) {
    this.userApi.create(user).subscribe(
      data => {
        console.log(JSON.stringify(data));
      }
    );
  }

  login(user) {
     return this.userApi.login(user);
  }
}
