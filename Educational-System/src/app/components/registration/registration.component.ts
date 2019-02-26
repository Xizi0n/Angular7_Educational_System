import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: any = {};
  passwordMatched = false;
  isValidPassword = false;
  passwordProblems = [];
  emailAvailable;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  comparePass(event) {
    if (this.user.password === this.user.passwordAgain) {
      console.log(true);
      document.querySelectorAll('input[type=password]').forEach(element => {
        element.classList.remove('passwordWarning');
      });
      this.passwordMatched = true;
    } else {
      console.log(false);
      this.passwordMatched = false;
      document.querySelectorAll('input[type=password]').forEach(element => {
        element.classList.add('passwordWarning');
      });
      document.getElementById('button').classList.add('disabled');
    }
  }

  checkPass() {
    this.passwordProblems = [];
    let hasUpperCase = false;
    let hasNumber = false;
    let longerThanSix = false;
    if (this.user.password.length < 6) {
      console.log('rövidebb mint 6 karakter');
      longerThanSix = false;
      this.passwordProblems.push('Legalább 6 karakter hosszú jelszó');
    } else {
      longerThanSix = true;
    }
    if (this.user.password) {
      for (let i = 0; i < this.user.password.length; i++) {
        if (this.user.password.charCodeAt(i) < 48 || this.user.password.charCodeAt(i) > 57) {
          console.log('nem szám');
          if (this.user.password.charAt(i) === this.user.password.charAt(i).toUpperCase()) {
            hasUpperCase = true;
          }
        } else {
          console.log('szám');
        }
      }
      if (hasUpperCase === false) {
        this.passwordProblems.push('Legalább 1 nagybetű');
      }
    }
    if (this.user.password) {
      for (let i = 0; i < this.user.password.length; i++) {
        // Ha szám
        if (!isNaN(this.user.password.charAt(i))) {
          hasNumber = true;
        }
      }
      if (hasNumber === false) {
        this.passwordProblems.push('Legalább 1 szám');
      }
    }
    if ( longerThanSix && hasNumber && hasUpperCase) {
      this.isValidPassword = true;
    } else {
      this.isValidPassword = false;
    }
  }

  clearEmail() {
    this.emailAvailable = true;
    document.querySelector('input[type=email]').classList.remove('passwordWarning');
  }

  registrate() {
    let allFilled = false;
    let filledCounter = 0;
    document.querySelectorAll('input').forEach(input => {
      if (input.value === '' || input.value === undefined || input.value === null) {
        allFilled = false;
      } else {
        filledCounter += 1;
      }
    });
    if (filledCounter === 5) {
      allFilled = true;
    }
    if (this.passwordMatched && this.isValidPassword && allFilled) {
      this.auth.signUp(this.user).subscribe( response => {
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(error);
        // tslint:disable-next-line:max-line-length
        if (error.message === 'The `User` instance is not valid. Details: `email` Email already exists (value: "' + this.user.email + '").') {
          this.emailAvailable = false;
          document.querySelector('input[type=email]').classList.add('passwordWarning');
        }
      });
    } else {
    }
  }

}
