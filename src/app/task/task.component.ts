import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../services/example/example.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  private tasks;

  constructor(public exampleService: ExampleService, private router: Router) { }

  ngOnInit(): void {
    this.exampleService.getTasks()
      .subscribe(data => {
        this.tasks = data;
      }, err => {
        console.log('Error...');
        this.router.navigateByUrl('/about');
      });
  }

}
