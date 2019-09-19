import { Component, OnInit, Input } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-forum-replies",
  templateUrl: "./forum-replies.component.html",
  styleUrls: ["./forum-replies.component.css"]
})
export class ForumRepliesComponent implements OnInit {
  @Input() postId;
  post;
  loaded = false;

  constructor(private forumService: ForumService) {}

  ngOnInit() {
    this.getReplies();
  }

  getReplies() {
    this.forumService.getReplies(this.postId).subscribe(post => {
      this.post = post;
      this.loaded = true;
    });
  }
}
