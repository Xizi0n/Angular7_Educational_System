import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  userId;
  role;

  constructor(private userService: UserService) { }


  updateUser() {
    this.userService.updateUser(this.userId, this.role).subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
