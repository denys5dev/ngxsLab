import { Component, OnInit } from '@angular/core';
import {
  Actions,
  ofActionDispatched,
  ofActionErrored,
  Store,
} from '@ngxs/store';
import { PostActions } from 'src/app/pages/welcome/+store/post.actions';
import { PostFacadeService } from 'src/app/pages/welcome/+store/post.facade';
import { Post } from 'src/app/pages/welcome/models/Post';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(
    public postFacadeService: PostFacadeService,
    private action$: Actions,
    private store: Store
  ) {
    this.action$
      .pipe(ofActionDispatched(PostActions.FetchPostsFromStore))
      .subscribe(() => {
        console.log('dispatched');
      });

    this.action$
      .pipe(ofActionErrored(PostActions.FetchPostsSuccess))
      .subscribe(() => {
        console.log('error dispatched');
      });
  }

  ngOnInit() {
    this.postFacadeService.fetchPosts();

    // this.store.dispatch(new PostActions.FetchPostsFromStore());
  }

  sortFn = (a: Post, b: Post) => a.id - b.id;
}
