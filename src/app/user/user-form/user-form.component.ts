import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { User } from '../user.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output()
  emitUserPopulated: EventEmitter<User> = new EventEmitter<User>();
  formGroup: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['0000000000', [Validators.required,
      Validators.pattern(/(^\d{9}$)|(^\d{2}[-\.\s]\d{3}[-\.\s]\d{2}[-\.\s]\d{2}$)/)]],
      address: ['', Validators.required],
    });
    this.formGroup.setValue(new User());
  }

  addUser() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.emitUserPopulated.emit(this.formGroup.value);
    this.onCancel();
  }

  onCancel() {
    this.submitted = false;
    this.formGroup.reset();
  }
}
