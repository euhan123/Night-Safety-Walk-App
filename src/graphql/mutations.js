/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSelf = /* GraphQL */ `
  mutation CreateSelf(
    $input: CreateSelfInput!
    $condition: ModelSelfConditionInput
  ) {
    createSelf(input: $input, condition: $condition) {
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
export const updateSelf = /* GraphQL */ `
  mutation UpdateSelf(
    $input: UpdateSelfInput!
    $condition: ModelSelfConditionInput
  ) {
    updateSelf(input: $input, condition: $condition) {
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
export const deleteSelf = /* GraphQL */ `
  mutation DeleteSelf(
    $input: DeleteSelfInput!
    $condition: ModelSelfConditionInput
  ) {
    deleteSelf(input: $input, condition: $condition) {
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
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
      id
      username
      nickname
      createdAt
      updatedAt
      selfPostsId
    }
  }
`;
