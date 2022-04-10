/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSelf = /* GraphQL */ `
  subscription OnCreateSelf {
    onCreateSelf {
      id
      name
      posts {
        items {
          id
          username
          nickname
          createdAt
          updatedAt
          selfPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSelf = /* GraphQL */ `
  subscription OnUpdateSelf {
    onUpdateSelf {
      id
      name
      posts {
        items {
          id
          username
          nickname
          createdAt
          updatedAt
          selfPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSelf = /* GraphQL */ `
  subscription OnDeleteSelf {
    onDeleteSelf {
      id
      name
      posts {
        items {
          id
          username
          nickname
          createdAt
          updatedAt
          selfPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
