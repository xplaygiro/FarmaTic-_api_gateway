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
        createProduct: async(_, { producto }, { dataSources }) => {
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
            return await dataSources.inventarioAPI.createProducto(productInput);

        },
        updateProduct: async(_, { producto }, { dataSources }) => {
            //prodUpToken = (await dataSources.inventarioAPI.getProductoById(producto)).id
            //if()
            const productUpdate = { 
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
            return await dataSources.inventarioAPI.createProducto(productUpdate);

        },
        deleteProduct: async(_, { id }, { dataSources }) => {
            return await dataSources.inventarioAPI.deleteProducto(id);
        }
    }
};

module.exports = productosResolver;