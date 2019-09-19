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
    return this.http.get(environment.BaseUrl + "/forum/topic/get-all");
  }

  addReply(id, body) {
    console.log(id);
    return this.http.post(
      environment.BaseUrl + "/forum/post/add-reply",
      {
        postId: id,
        replyToSave: { ...body, author: localStorage.getItem("userId") }
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  getReplies(postId) {
    return this.http.get(
      environment.BaseUrl + `/forum/post/get-replies/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }

  getPost(postId) {
    return this.http.get(environment.BaseUrl + `/forum/post/get/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }

  addRating(postId) {
    return this.http.post(
      environment.BaseUrl + "/forum/post/rating/add",
      {
        postId: postId
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
  }
}
