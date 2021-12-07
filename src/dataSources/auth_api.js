const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }

    

}