import { Component, OnInit, Input } from "@angular/core";
import { ForumService } from "src/app/services/forum.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-forum-list-details",
  templateUrl: "./forum-list-details.component.html",
  styleUrls: ["./forum-list-details.component.css"]
})
export class ForumListDetailsComponent implements OnInit {
  @Input() post;
  constructor(private auth: AuthService) {}

  ngOnInit() {}
}
