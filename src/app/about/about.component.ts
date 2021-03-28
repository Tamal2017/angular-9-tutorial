import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info: Info = new Info();
  comments: Array<Comment> = [];
  comment: Comment = new Comment();
  newComment: boolean = false;

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
  name: string = "Test";
  email: string = "test@mail.com";
  phone: string = "00000000";
}

export class Comment {
  message: string = '';
  date: Date = null;
}
