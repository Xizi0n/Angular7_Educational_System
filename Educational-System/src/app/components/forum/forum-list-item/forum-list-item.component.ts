import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-forum-list-item",
  templateUrl: "./forum-list-item.component.html",
  styleUrls: ["./forum-list-item.component.css"]
})
export class ForumListItemComponent implements OnInit {
  @Input() topic;
  toggle = false;
  showDetails = false;
  showAddPost = false;
  title = "";
  message = "";
  code = "";

  constructor(public auth: AuthService, private forumService: ForumService) {}

  ngOnInit() {}

  toggleDropDown() {
    this.forumService.getTopic(this.topic._id).subscribe(topic => {
      console.log(topic);
      this.topic = topic;
      this.toggle = !this.toggle;
    });
    this.showAddPost = false;
    console.log(this.topic);
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  }

  toggleAddPost() {
    this.showAddPost = !this.showAddPost;
  }

  closePost() {
    this.showAddPost = false;
    this.code = "";
    this.message = "";
  }

  sendPost(topicId) {
    console.log(topicId);
    const postToadd = {
      title: this.title,
      message: this.message,
      code: this.code
    };
    this.forumService.addPost(topicId, postToadd).subscribe(result => {
      console.log(result);
      this.forumService.getTopic(this.topic._id).subscribe(topic => {
        console.log(topic);
        this.topic = topic;
        this.closePost();
      });
    });
  }
}
