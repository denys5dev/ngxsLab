import { Injectable } from '@angular/core';
import { Action, State, StateContext, StateToken } from '@ngxs/store';
import { map } from 'rxjs';
import { PostActions } from 'src/app/pages/welcome/+store/post.actions';
import { PostStateModel } from 'src/app/pages/welcome/+store/post.state.model';
import { Post } from 'src/app/pages/welcome/models/Post';
import { Service } from 'src/app/services/service.service';

const POST_STATE_TOKEN = new StateToken<PostStateModel>('postState');

@State<PostStateModel>({
  name: POST_STATE_TOKEN,
  defaults: { posts: [] },
})
@Injectable()
export class PostState {
  @Action(PostActions.FetchPostsSuccess)
  fetchPosts(
    { patchState }: StateContext<PostStateModel>,
    actions: PostActions.FetchPostsSuccess
  ) {
    patchState({ posts: actions.payload });
  }

  @Action(PostActions.FetchPostsFromStore)
  fetchPostsFromStore({ patchState }: StateContext<PostStateModel>) {
    return this._service
      .getPosts()
      .pipe(map((posts: Post[]) => patchState({ posts })));
  }

  constructor(private readonly _service: Service) {}
}
