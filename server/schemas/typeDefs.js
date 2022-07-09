const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID 
        username: String
        email: String
        bookCount: Int
    }

    type Book {
        bookId: Int 
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type savedBooks {
    
    }

    type Query {
        me: User 
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String! password: String!): Auth 
        saveBook(authors: [String]!, description: String!, title: String!, bookId: String! image: String!, link: String): User
        removeBook(bookId: Int): User
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;

