import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  users: Array<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
