const { gql } = require('apollo-server')

const proveedorTypeDefs = gql`

    type Proveedor{
        laboratorio     : String!;
        nombreDeContacto: String!;
        email           : String!;
        direccion       : String!;
        telefono        : Int!;
        celular         : Int!;
    }

    type ProveedorUpdate{
        laboratorio     : String!;
        nombreDeContacto: String;
        email           : String;
        direccion       : String;
        telefono        : Int;
        celular         : Int;
    }

    extend type Query{
        productById(laboratorio:String!): proveedor
    }    

    extend type Mutation{
        createProduct(proveedor: Proveedor!): Proveedor
        updateProduct(proveedor: ProveedorUpdate!): Proveedor
        deleteProduct(id:String!): String!
    }   
`;

module.exports = proveedorTypeDefs