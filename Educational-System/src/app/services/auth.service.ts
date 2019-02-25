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
    return this.userApi.create(user);
  }

  login(user) {
     return this.userApi.login(user);
  }

  logout() {
    return this.userApi.logout();
  }

  isAutheticated() {
    return this.userApi.isAuthenticated();
  }

  isEmailAlreadyExist(emailtoCheck) {
    return this.userApi.  findOne({ fields: {email: emailtoCheck}});
  }
}
