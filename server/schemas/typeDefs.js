const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID!
}

type User {
    _id: ID!
}

type Query {

}

type Mutation {

}
`;

module.exports = typeDefs;