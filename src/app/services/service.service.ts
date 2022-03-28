import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Albums } from 'src/app/pages/welcome/models/Albums';
import { Post } from 'src/app/pages/welcome/models/Post';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private readonly _http: HttpClient) {}

  getPosts() {
    return this._http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsById(id: number) {
    return this._http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getUsersAlbums(userId: number) {
    return this._http.get<Albums[]>(
      `https://jsonplaceholder.typicode.com/users/${userId}/albums`
    );
  }
}
