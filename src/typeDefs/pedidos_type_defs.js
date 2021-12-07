const { gql } = require('apollo-server')

const orderTypeDefs = gql`

    type Pedido{
        id             : String!;
        fecha          : String!;
        productoDestino: String!;
        proveedorOrigen: String!;
        cantidad       : Int!;
        precio         : Int!;
    }

    type PedidoUpdate{
        id             : String!;
        fecha          : String;
        productoDestino: String;
        proveedorOrigen: String;
        cantidad       : Int;
        precio         : Int;
    }

    extend type Query{
        pedidoById(id:String!): Pedido
    }    

    extend type Mutation{
        createPedido(pedido: Pedido!): Pedido
        updatePedido(pedido: PedidoUpdate!): Pedido
        deletePedido(id:String!): String!
    }   

`;

module.exports = orderTypeDefs