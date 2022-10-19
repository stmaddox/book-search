import { gql } from "@apollo/client";

export const SAVE_BOOK = gql `
    mutation SaveBook($bookData: bookDataInput!) {
  saveBook(bookData: $bookData) {
    _id
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`

export const REMOVE_BOOK = gql `
    mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    savedBooks {
      bookId
      title
      authors
      description
      image
      link
    }
  }
}
`

export const ADD_USER = gql `
    mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const LOGIN = gql `
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`