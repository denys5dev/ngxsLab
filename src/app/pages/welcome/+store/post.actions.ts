import { Albums } from 'src/app/pages/welcome/models/Albums';
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

  export class GetPostByIdSuccess {
    static readonly type = '[Post] Fetch Posts By ID Success';
    constructor(public payload: Post) {}
  }
  export class GetAlbumsByUserId {
    static readonly type = '[Post] Get Albums By User ID';
  }

  export class GetAlbumsByUserFail {
    static readonly type = '[Post] Get Albums By User Fail';
  }
  export class GetAlbumsByUserIdSuccess {
    static readonly type = '[Post] Get Albums By User ID Success';
    constructor(public payload: Albums[]) {}
  }

  export class FetchPostsFromStore {
    static readonly type = '[Post] Fetch From Store';
  }
}
