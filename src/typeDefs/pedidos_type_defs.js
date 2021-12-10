const { gql } = require('apollo-server');

const pedidosTypeDefs = gql`

    type Pedido{
        id             : String!
        fecha          : String!
        productoDestino: String!
        proveedorOrigen: String!
        cantidad       : Int!
        precio         : Int!
    }

    type PedidoUpdate{
        id             : String!
        fecha          : String
        productoDestino: String
        proveedorOrigen: String
        cantidad       : Int
        precio         : Int
    }

    extend type Query{
        pedidoById(id:String!): Pedido!
    }    

    extend type Mutation{
        createPedido(pedido: Pedido!): Pedido!
    }   

`;

module.exports = pedidosTypeDefs;