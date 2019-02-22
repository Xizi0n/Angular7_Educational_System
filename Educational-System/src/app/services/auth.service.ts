import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoopBackConfig } from '../shared/sdk';
import { UserApi } from '../shared/sdk';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  test = {
    email: 'foobar@bar.com',
    password: 'asdqwe'
  };

  constructor(private http: HttpClient, private userApi: UserApi) {
    LoopBackConfig.setBaseURL(environment.loopBackBaseUrl);
    LoopBackConfig.setApiVersion(environment.loopBackApi);
  }

  signUp() {
    this.userApi.create(this.test).subscribe(
      data => {
        console.log(JSON.stringify(data));
      }
    );
  }
}
