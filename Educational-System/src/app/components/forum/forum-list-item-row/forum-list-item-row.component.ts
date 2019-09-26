import { Component, OnInit, Input } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-forum-list-item-row",
  templateUrl: "./forum-list-item-row.component.html",
  styleUrls: ["./forum-list-item-row.component.css"]
})
export class ForumListItemRowComponent implements OnInit {
  @Input() postId;
  showDetails = false;
  post;
  constructor(private forumService: ForumService) {}

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.forumService.getPost(this.postId).subscribe(post => {
      this.post = post;
    });
  }

  toggleDetails(event) {
    if (event.target.className !== "fas fa-trash") {
      console.log(event.target);
      this.showDetails = !this.showDetails;
      console.log(this.showDetails);
    }
  }

  deletePost() {
    this.forumService.deletePost(this.postId).subscribe(result => {
      console.log(result);
      this.getPost();
    });
  }
}
