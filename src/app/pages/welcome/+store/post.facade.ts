import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, finalize, map, startWith, tap } from 'rxjs/operators';
import { PostActions } from 'src/app/pages/welcome/+store/post.actions';
import { PostSelectors } from 'src/app/pages/welcome/+store/post.selectors';
import { Post } from 'src/app/pages/welcome/models/Post';
import { Service } from 'src/app/services/service.service';

@Injectable({ providedIn: 'root' })
export class PostFacadeService {
  @Select(PostSelectors.getPosts) posts$!: Observable<Post[]>;

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

  constructor(private readonly _service: Service) {}
}
