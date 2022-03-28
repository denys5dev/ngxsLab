import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/pages/welcome/models/Post';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private readonly _http: HttpClient) {}

  getPosts() {
    return this._http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts11'
    );
  }
}
