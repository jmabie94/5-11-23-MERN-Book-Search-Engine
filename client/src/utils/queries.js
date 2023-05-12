import { gql } from "@apollo/client";

export const GET_MY_BOOKS = gql`
{
    myBooks {
        _id
        username
        email
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
`;