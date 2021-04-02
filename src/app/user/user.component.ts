import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User> = [];
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['0000000000', Validators.required],
      address: ['', Validators.required],
    });
    this.formGroup.setValue(new User());
  }

  addUser() {
    this.submitted = true;
    if (! this.formGroup.invalid) {
      this.users.push(this.formGroup.value);
    }
  }

}

export class User {
  name = '';
  email = '';
  phone = '';
  address = '';
}
