import { Component, OnInit } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-forum-main",
  templateUrl: "./forum-main.component.html",
  styleUrls: ["./forum-main.component.css"]
})
export class ForumMainComponent implements OnInit {
  topics;
  showaddTopic = false;
  topicToAdd = "";

  constructor(public auth: AuthService, private forumService: ForumService) {
    /* this.forumService.getTopics().subscribe(topics => {
      this.topics = topics;
      console.log(topics);
    }, err => {
      console.error(err);
    }); */
  }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
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

  showAddTopic() {
    this.showaddTopic = !this.showaddTopic;
  }

  addTopic() {
    console.log(this.topicToAdd);
    this.forumService.createTopic(this.topicToAdd).subscribe(result => {
      console.log(result);
      this.getTopics();
      this.showaddTopic = !this.showaddTopic;
    });
  }
}
