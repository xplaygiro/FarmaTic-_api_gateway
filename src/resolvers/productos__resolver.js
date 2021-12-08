const productosResolver = {
    Query: {
        productById: async(_, {id}, { dataSources }) => {
            return await dataSources.inventarioAPI.getProductoById(id);

        },
        inventarioByMedicamento: async(_, { nombreMedicamento }, { dataSources }) => {
            return await dataSources.inventarioAPI.getInventarioByMedicamento(nombreMedicamento);
        }
    },
    Mutation: {
        createProduct: async(_, { producto }, { dataSources, userIdToken }) => {
            const productInput = {
                id: producto.id,
                laboratorio: producto.laboratorio,
                nombreMedicamento: producto.nombreMedicamento,
                concentracion: producto.concentracion,
                presentacion: producto.presentacion,
                cantidad: producto.cantidad,
                fechaVencimiento: producto.fechaVencimiento,
                fechaFabricacion: producto.fechaFabricacion,
                precioCosto: producto.precioCosto,
                precioVenta: producto.precioVenta
            }

        },
        updateProduct: async(_, { producto }, { dataSources, userIdToken }) => {

        },
        deleteProduct: async(_, { laboratorio }, { dataSources, userIdToken }) => {

        }
    }
};

module.exports = productosResolver;