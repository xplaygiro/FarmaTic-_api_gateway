const usersResolver = {
    Query: {
        userDetailById: async(_, {id}, { dataSources, userIdToken}) => {
            if(id == userIdToken)
                return await dataSources.authAPI.getUser(id);
            else
                return null;
        }
    },
    Mutation: {
        signUpUser: async(_, {userInput}, { dataSources }) => {
            const authInput = {
                name: userInput.name,
                tipo_documento: userInput.tipo_documento,
                document: userInput.document,
                email: userInput.email,
                username: userInput.username,
                password: userInput.password
            }
            await dataSources.authAPI.createUser(authInput);
        },
        logIn:(_, {credentials}, {dataSources}) => {
            dataSources.authAPI.authRequest(credentials)
        },
        refreshToken:(_, {token}, {dataSources}) => {
            dataSources.authAPI.refreshToken(token)
        }
    }
};

module.exports = usersResolver;