const pedidosResolver = {
    Query: {
        pedidoById: async(_, {id}, { dataSources, userIdToken}) => {
            if(id == userIdToken)
                return await dataSources.inventarioAPI.getPedidoById(id);
            else
                return null;
        }

    },
    Mutation: {
        createPedido

    }
};

module.exports = pedidosResolver;