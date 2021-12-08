const { gql } = require('apollo-server');

const authTypeDefs = gql`
    type Tokens {
        refresh: String!
        access : String!
    }

    type Access {
        access: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    input SignUpInput {
        name          : String!
        tipo_documento: String!
        document      : Int!        
        email         : String!
        username      : String!
        password      : String!        
    } 

    type UserDetail {
        id: Int!
        username: String!
        }

    extend type Query {
        userDetailById(id:Int!):UserDetail
    }

    extend type Mutation {
        signUpUser(userInput :$SignUpInput): Tokens!
        logIn(credentials: $CredentialsInput!): Tokens!
        refreshToken(token: String!): Access!
    }    
`;
module.exports = authTypeDefs;