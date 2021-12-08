const pedidosResolver = {
    Query: {
        pedidoById: async(_, {id}, { dataSources, userIdToken}) => {
            idToken = (await dataSources.inventarioAPI.getPedidoById(userIdToken)).id
            if(id == idToken)
                return await dataSources.inventarioAPI.getPedidoById(id);
            else
                return null;
        }

    },
    Mutation: {
        createPedido: async(_, {Pedido}, { dataSources, userIdToken }) => {
            const pedidoInput = {
                id: Pedido.id,
                fecha: Pedido.fecha,
                productoDestino: Pedido.productoDestino,
                proveedorOrigen: Pedido.proveedorOrigen,
                cantidad: Pedido.cantidad,
                precio: Pedido.precio
            }
            return await dataSources.inventarioAPI.createPedido(pedidoInput);
        }

    }
};

module.exports = pedidosResolver;