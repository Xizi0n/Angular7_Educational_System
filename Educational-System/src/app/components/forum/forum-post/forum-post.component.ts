import { Component, OnInit, Input } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-forum-post",
  templateUrl: "./forum-post.component.html",
  styleUrls: ["./forum-post.component.css"]
})
export class ForumPostComponent implements OnInit {
  @Input() post;
  showReplies = false;
  alreadyLiked = false;
  openReply = false;
  message = "";
  code = "";

  constructor(private forumService: ForumService) {}

  ngOnInit() {
    console.log("Input:", this.post);
  }

  toggleShowReplies() {
    this.showReplies = !this.showReplies;
  }

  like(post) {
    console.log(post);
    this.forumService.addRating(post._id).subscribe((result: any) => {
      if (result.code === 200) {
        post.rating++;
        this.alreadyLiked = true;
      }
      if (result.code === 403) {
        this.alreadyLiked = true;
      }
    });

    if (this.alreadyLiked === true) {
      document.getElementById("like").classList.remove("selected");
      post.rating--;
    } else {
      post.rating++;
      document.getElementById("like").classList.add("selected");
    }
    this.alreadyLiked = !this.alreadyLiked;
  }

  reply(post) {
    if (this.openReply === true) {
      document.getElementById("reply").classList.remove("selected");
    } else {
      document.getElementById("reply").classList.add("selected");
    }
    this.openReply = !this.openReply;
  }

  closeReply() {
    this.openReply = false;
  }

  sendReply(id) {
    console.log(id);
    const body = {
      content: this.message,
      code: this.code,
      rating: 0
    };

    this.forumService.addReply(id, body).subscribe(
      data => {
        console.log(data);
        this.closeReply();
        this.forumService.dataChanged$.next(true);
      },
      err => {
        console.log(err);
      }
    );
  }
}
