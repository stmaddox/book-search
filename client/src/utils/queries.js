import { gql } from "@apollo/client";

export const ME = gql `
    query {
    me {
        _id
        username
        email
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