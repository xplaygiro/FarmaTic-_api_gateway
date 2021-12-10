const pedidosResolver = {
    Query: {
        pedidoById: async (_, { id }, { dataSources }) => {
            return await dataSources.inventarioAPI.getPedidoById(id);
        }

    },
    Mutation: {
        createPedido: async (_, { pedido }, { dataSources }) => {
            const pedidoInput = {
                id: pedido.id,
                fecha: pedido.fecha,
                productoDestino: pedido.productoDestino,
                proveedorOrigen: pedido.proveedorOrigen,
                cantidad: pedido.cantidad,
                precio: pedido.precio
            }
            return await dataSources.inventarioAPI.createPedido(pedidoInput);
        }

    }
};

module.exports = pedidosResolver;