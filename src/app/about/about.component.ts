import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {

  info: Info = new Info();
  comments: Array<Comment> = [];
  comment: Comment = new Comment();
  newComment = false;

  constructor() { }

  ngOnInit(): void {
  }

  addComment() {
    if (this.comment.message) {
      this.comment.date = new Date();
      this.comments.push({
        message: this.comment.message,
        date: this.comment.date
      });
      this.comment.message = '';
    }
  }
}

export class Info {
  name = 'Test';
  email = 'test@mail.com';
  phone = '00000000';
}

export class Comment {
  message = '';
  date: Date = null;
}
