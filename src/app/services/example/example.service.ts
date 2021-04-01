import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.component';

@Injectable()
export class ExampleService {

  private host = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.host + '/tasks');
  }

  login(user: User) {
    return this.http.post(this.host + '/login', user, { observe: 'body' });
  }

  saveTask(task) {
    return this.http.post(this.host + '/tasks',
      task,
      {
        headers: new HttpHeaders({ autorization: 'my-token' })
      });
  }

  /* just for example */
  save1() {
    return this.http.get(this.host + '/tasks', { headers: new HttpHeaders({ Accept: 'application/json' }) });
  }

  save2() {
    const headers = new HttpHeaders();
    headers.set('autorization', 'my-token');
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');

    return this.http.post(this.host + '/tasks', headers);
  }

}
