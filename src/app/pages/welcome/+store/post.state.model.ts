import { Albums } from 'src/app/pages/welcome/models/Albums';
import { Post } from 'src/app/pages/welcome/models/Post';

export interface PostStateModel {
  posts: Post[];
  postById?: Post;
  albums?: Albums[];
}
