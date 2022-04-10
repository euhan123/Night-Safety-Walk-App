/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSelf = /* GraphQL */ `
  query GetSelf($id: ID!) {
    getSelf(id: $id) {
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
export const listSelves = /* GraphQL */ `
  query ListSelves(
    $filter: ModelSelfFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSelves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
