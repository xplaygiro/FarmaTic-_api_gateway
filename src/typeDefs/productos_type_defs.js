const { gql } = require('apollo-server')

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

    type ProductUpdate {
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

    extend type Query{
        productById(id:String!): Product
        inventarioByMedicamento(nombreMedicamento:String!): [Inventario]
    }    

    extend type Mutation{
        createProduct(producto: Product!): Product
        updateProduct(producto: ProductUpdate!): Product
        deleteProduct(id:String!): String!
    }    
`;

module.exports = productTypeDefs;