import { Post } from 'src/app/pages/welcome/models/Post';

export namespace PostActions {
  export class FetchPostsSuccess {
    static readonly type = '[Post] Fetch Posts Success';
    constructor(public payload: Post[]) {}
  }

  export class FetchPosts {
    static readonly type = '[Post] Fetch Posts';
  }

  export class FetchPostsFail {
    static readonly type = '[Post] Fetch Posts Fail';
  }

  export class FetchPostsFromStore {
    static readonly type = '[Post] Fetch From Store';
  }
}
