import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  finalize,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { PostActions } from 'src/app/pages/welcome/+store/post.actions';
import { PostSelectors } from 'src/app/pages/welcome/+store/post.selectors';
import { Albums } from 'src/app/pages/welcome/models/Albums';
import { Post } from 'src/app/pages/welcome/models/Post';
import { Service } from 'src/app/services/service.service';

@Injectable({ providedIn: 'root' })
export class PostFacadeService {
  @Select(PostSelectors.getPosts) posts$!: Observable<Post[]>;
  @Select(PostSelectors.getPostsById) postsById$!: Observable<Post>;

  @Dispatch() fetchPosts = () => {
    console.log('loading start');
    return this._service.getPosts().pipe(
      map((posts: Post[]) => new PostActions.FetchPostsSuccess(posts)),
      startWith(new PostActions.FetchPosts()),
      catchError(() => {
        alert('Error!');
        return of(new PostActions.FetchPostsFail());
      }),
      finalize(() => {
        console.log('loading end');
      })
    );
  };

  @Dispatch() getPostById(id: number) {
    return this._service
      .getPostsById(id)
      .pipe(map((post: Post) => new PostActions.GetPostByIdSuccess(post)));
  }

  @Dispatch() getAlbumsByUserId() {
    console.log('loading start');
    return this.postsById$.pipe(
      filter((post: Post) => Boolean(post)),
      switchMap((post: Post) => this._service.getUsersAlbums(post.userId)),
      map(
        (albums: Albums[]) => new PostActions.GetAlbumsByUserIdSuccess(albums)
      ),
      startWith(new PostActions.GetAlbumsByUserId()),
      catchError(() => {
        alert('Error!');
        return of(new PostActions.GetAlbumsByUserFail());
      }),
      finalize(() => {
        console.log('loading end');
      })
    );
  }

  constructor(private readonly _service: Service) {}
}
