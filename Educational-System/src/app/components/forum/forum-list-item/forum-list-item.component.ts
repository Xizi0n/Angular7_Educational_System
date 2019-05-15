import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum-list-item',
  templateUrl: './forum-list-item.component.html',
  styleUrls: ['./forum-list-item.component.css']
})
export class ForumListItemComponent implements OnInit {

  @Input() topic;
  toggle = false;
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropDown() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  }

}
