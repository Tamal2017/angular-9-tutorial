import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.route.navigate(['about']);
  }
}
