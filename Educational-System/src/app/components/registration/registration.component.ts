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
  passwordChecked = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  checkPass( event) {
    if (this.user.password === this.user.passwordAgain) {
      console.log(true);
      document.querySelectorAll('input[type=password]').forEach(element => {
        element.classList.remove('passwordWarning');
      });
      this.passwordChecked = true;
    } else {
      console.log(false);
      this.passwordChecked = false;
      document.querySelectorAll('input[type=password]').forEach(element => {
        element.classList.add('passwordWarning');
      });
      document.getElementById('button').classList.add('disabled');
    }
  }

  registrate() {
    console.log('register clicked');
    if (this.passwordChecked) {
      this.auth.signUp(this.user);
    } else {
      alert('A két jelszó nem egyezik meg!');
    }
  }

}
