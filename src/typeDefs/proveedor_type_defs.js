const { gql } = require('apollo-server');

const proveedorTypeDefs = gql`

    type Proveedor{
        laboratorio     : String!
        nombreDeContacto: String!
        email           : String!
        direccion       : String!
        telefono        : Int!
        celular         : Int!
    }

    input ProveedorInput{
        laboratorio     : String!
        nombreDeContacto: String!
        email           : String!
        direccion       : String!
        telefono        : Int!
        celular         : Int!
    }

    input ProveedorUpdate{
        laboratorio     : String!
        nombreDeContacto: String
        email           : String
        direccion       : String
        telefono        : Int
        celular         : Int
    }

    type ProveedorList {        
        laboratorio      : String!
        nombreDeContacto : String!
        email            : String!
        telefono         : Int!
    }

    extend type Query{
        proveedorByLaboratorio(laboratorio:String!)    : Proveedor
        proveedorListByLaboratorio(laboratorio:String!): ProveedorList
    }    

    extend type Mutation{
        createProveedor(proveedor: ProveedorInput) : Proveedor!
        updateProveedor(proveedor: ProveedorUpdate!): Proveedor!
        deleteProveedor(id:String!)                 : String!
    }   
`;

module.exports = proveedorTypeDefs;