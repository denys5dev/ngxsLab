import { Selector } from '@ngxs/store';
import { PostState } from 'src/app/pages/welcome/+store/post.state';
import { PostStateModel } from 'src/app/pages/welcome/+store/post.state.model';

export class PostSelectors {
  @Selector([PostState])
  static getPosts(state: PostStateModel) {
    return state.posts;
  }
}
