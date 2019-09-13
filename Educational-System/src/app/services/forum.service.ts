import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ForumService {
  datachanged = true;
  dataChanged$ = new BehaviorSubject(this.datachanged);

  constructor(private http: HttpClient) {}

  createTopic(topic) {
    //return this.postsApi.create(topic);
  }

  getTopics() {
    //return this.postsApi.find();
  }

  addReply(oid, index, body) {
    /* const asd = "posts[0].$.replies";
    console.log(asd);
    return this.postsApi.updateAll(
      { id: oid },
      {
        $push: {
          "posts.0.replies": body
        }
      }
    ); */
  }
}
