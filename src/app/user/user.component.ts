import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   users: Array<User> = [];
   user: User;

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {

  }

}

export class User {
  name = '';
  email = '';
  phone = '';
  address = '';
}
