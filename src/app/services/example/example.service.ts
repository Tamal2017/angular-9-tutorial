import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

  private host = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.host + '/tasks');
  }

  login(_user) {
    return this.http.post(this.host + '/login', _user, { observe: 'body' });
  }

  saveTask(_task) {
    return this.http.post(this.host + '/tasks',
      _task,
      {
        headers: new HttpHeaders({ autorization: 'my-token' })
      });
  }

}
