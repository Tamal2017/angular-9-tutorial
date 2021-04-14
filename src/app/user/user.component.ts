import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addUser($event: User) {
    this.users.push($event);
  }

}

export class User {
  name = '';
  email = '';
  phone = '';
  address = '';
}
