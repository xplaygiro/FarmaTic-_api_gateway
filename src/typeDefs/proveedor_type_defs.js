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

    type ProveedorList {
        id               : String!
        laboratorio      : String!
        nombreDeContacto : String!
        email            : String!
        telefono         : Int!
    }

    extend type Query{
        proveedorById(laboratorio:String!)             : Proveedor
        proveedorListByLaboratorio(laboratorio:String!): ProveedorList
    }    

    extend type Mutation{
        createProduct(proveedor: Proveedor!)      : Proveedor
        updateProduct(proveedor: ProveedorUpdate!): Proveedor
        deleteProduct(id:String!)                 : String!
    }   
`;

module.exports = proveedorTypeDefs