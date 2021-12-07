const { ApolloError }   = require('apollo-server');
const serverConfig      = require('../server');
const fetch             = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';

    if (token == '')
        return { userIdToken: null }

    else {
        try {
            let requestOptions = {
                method   : 'POST',
                headers  : { "Content-Type": "aplication/json" },
                body     : JSON.stringify({ token }),
                redirect : 'follow'
            };

            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions)

            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`Sesión fallida o inactiva - ${401}` + response.status, 401)
            }

            return { userIdToken: (await response.json()).id };
        }

        catch (error) {
            throw new ApolloError(`Error validando el Token: ${500}: ${error}`, 500)
        }
    }
}

module.exports = authentication;