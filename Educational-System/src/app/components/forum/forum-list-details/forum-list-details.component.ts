import { Component, OnInit, Input } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forum-list-details',
  templateUrl: './forum-list-details.component.html',
  styleUrls: ['./forum-list-details.component.css'],
})
export class ForumListDetailsComponent implements OnInit {

  @Input() topic;
  @Input() index;
  showReplies = false;
  alreadyLiked = false;
  openReply = false;
  message = '';
  code = '';

  constructor(private forumService: ForumService, private auth: AuthService) { }

  ngOnInit() {
  }

  toggleShowReplies() {
    this.showReplies = !this.showReplies;
  }

  like(post) {
    if (this.alreadyLiked === true) {
      document.getElementById('like').classList.remove('selected');
      post.rating--;
    } else {
      post.rating++;
      document.getElementById('like').classList.add('selected');
    }
    this.alreadyLiked = !this.alreadyLiked;
  }


  reply(post) {
    if (this.openReply === true) {
      document.getElementById('reply').classList.remove('selected');
    } else {
      document.getElementById('reply').classList.add('selected');
    }
    this.openReply = !this.openReply;
  }

  closeReply() {
    this.openReply = false;
  }

  sendReply(id, index) {
    console.log(id);
    console.log(index);
    const body = {
      content: this.message,
      code: this.code,
      author: 'Teszt Elek',
      rating: 0,
    };

    this.forumService.addReply(id, index, body).subscribe( data => {
      console.log(data);
      this.closeReply();
      this.forumService.dataChanged$.next(true);
    }, err => {
      console.log(err);
    });
  }


}
