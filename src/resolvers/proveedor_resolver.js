const proveedorResolver = {
    Query: {
        proveedorByLaboratorio: async (_, { laboratorio }, { dataSources }) => {
            return await dataSources.inventarioAPI.getProveedorByLaboratorio(laboratorio);
        },
        proveedorListByLaboratorio: async (_, { laboratorio }, { dataSources }) => {
            return await dataSources.inventarioAPI.getListProveedor(laboratorio);
        }
    },
    Mutation: {
        createProveedor:async(_, {proveedor}, {dataSources}) => {
            const proveedorInput = {
                laboratorio: proveedor.laboratorio,
                nombreDeContacto: proveedor.nombreDeContacto,
                email: proveedor.email,
                direccion: proveedor.direccion,
                telefono: proveedor.telefono,
                celular: proveedor.celular
            }
            return await dataSources.inventarioAPI.createProveedor(proveedorInput);
        },
        updateProveedor: async (_, { proveedor }, { dataSources }) => {
            return await dataSources.inventarioAPI.updateProveedor(proveedor);
        },
        deleteProveedor: async (_, { id }, { dataSources }) => {
            return await dataSources.inventarioAPI.deleteProveedor(id);
        }
    }
};

module.exports = proveedorResolver;