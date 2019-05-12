import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated === true) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }

}
