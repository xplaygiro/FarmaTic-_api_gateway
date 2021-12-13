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
        username      : String!
        }

    type Query {
        userDetailById(id: Int!): UserDetail!
    }

    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }    
`;
module.exports = authTypeDefs;