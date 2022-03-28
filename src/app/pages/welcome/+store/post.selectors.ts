import { Selector } from '@ngxs/store';
import { PostState } from 'src/app/pages/welcome/+store/post.state';
import { PostStateModel } from 'src/app/pages/welcome/+store/post.state.model';

export class PostSelectors {
  @Selector([PostState])
  static getPosts(state: PostStateModel) {
    return state.posts;
  }

  @Selector([PostState])
  static getPostsById(state: PostStateModel) {
    return state.postById;
  }

  @Selector([PostState])
  static getAlbums(state: PostStateModel) {
    return state.albums;
  }
}
