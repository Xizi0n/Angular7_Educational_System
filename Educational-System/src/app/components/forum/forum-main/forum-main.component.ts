import { Component, OnInit } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";

@Component({
  selector: "app-forum-main",
  templateUrl: "./forum-main.component.html",
  styleUrls: ["./forum-main.component.css"]
})
export class ForumMainComponent implements OnInit {
  topics;

  constructor(private forumService: ForumService) {
    /* this.forumService.getTopics().subscribe(topics => {
      this.topics = topics;
      console.log(topics);
    }, err => {
      console.error(err);
    }); */
  }

  ngOnInit() {
    this.forumService.getTopics().subscribe(
      topics => {
        this.topics = topics;
        console.log(topics);
      },
      err => {
        console.error(err);
      }
    );
  }

  reload() {
    /* this.forumService.getTopics().subscribe(topics => {
      this.topics = topics;
      console.log(topics);
    }, err => {
      console.error(err);
    }); */
  }
}
