const { gql } = require('apollo-server');

const productTypeDefs = gql `
    type Product {
        id               : String!
        laboratorio      : String!
        nombreMedicamento: String!
        concentracion    : String!
        presentacion     : String!
        cantidad         : Int!
        fechaVencimiento : String!
        fechaFabricacion : String!
        precioCosto      : Int!
        precioVenta      : Int!
    }

    input ProductInput {
        id               : String!
        laboratorio      : String!
        nombreMedicamento: String!
        concentracion    : String!
        presentacion     : String!
        cantidad         : Int!
        fechaVencimiento : String!
        fechaFabricacion : String!
        precioCosto      : Int!
        precioVenta      : Int!
    }

    input ProductUpdate {
        id               : String!
        laboratorio      : String
        nombreMedicamento: String
        concentracion    : String
        presentacion     : String
        cantidad         : Int
        fechaVencimiento : String
        fechaFabricacion : String
        precioCosto      : Int
        precioVenta      : Int
    }

    type Inventario {
        id               : String!
        laboratorio      : String!
        nombreMedicamento: String!
        concentracion    : String!
        cantidad         : Int!
    }

    type Query{
        productById(id:String!): Product
        inventarioByMedicamento(nombreMedicamento:String!): [Inventario]
    }    

    extend type Mutation{
        createProduct(producto: ProductInput!): Product!
        updateProduct(producto: ProductUpdate!): Product!
        deleteProduct(id:String!): String!
    }    
`;

module.exports = productTypeDefs;