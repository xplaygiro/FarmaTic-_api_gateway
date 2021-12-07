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

    type Query{
        proveedorByLaboratorio(laboratorio:String!)    : Proveedor
        proveedorListByLaboratorio(laboratorio:String!): ProveedorList
    }    

    type Mutation{
        createProveedor(proveedor: Proveedor!)      : Proveedor
        updateProveedor(proveedor: ProveedorUpdate!): Proveedor
        deleteProveedor(id:String!)                 : String!
    }   
`;

module.exports = proveedorTypeDefs