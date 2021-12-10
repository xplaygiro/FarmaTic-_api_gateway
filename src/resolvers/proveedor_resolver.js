const proveedorResolver = {
    Query: {
        proveedorByLaboratorio:async(_, { laboratorio }, { dataSources }) => {
            return await dataSources.inventarioAPI.getProveedorByLaboratorio(laboratorio);
        },
        proveedorListByLaboratorio:async(_, {laboratorio}, {dataSources}) => {
            return await dataSources.inventarioAPI.getListProveedor(laboratorio);
        }
    },
    Mutation: {
        createProveedor:async(_, {proveedor}, {dataSources}) => {
            return await dataSources.inventarioAPI.createProveedor(proveedor);
        },
        updateProveedor:async(_, {proveedor}, {dataSources}) => {
            return await dataSources.inventarioAPI.updateProveedor(proveedor);
        },
        deleteProveedor:async(_, {id}, {dataSources}) => {
            return await dataSources.inventarioAPI.deleteProveedor(id);
        }
    }
};

module.exports = proveedorResolver;