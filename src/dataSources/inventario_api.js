const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class InventarioAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.inventario_api_url;
    }

    async createProveedor(Proveedor){
        Proveedor = new Object(JSON.parse(JSON.stringify(Proveedor)));
        return await this.post(`/proveedores`, Proveedor);
    }
    
    async updateProveedor(Proveedor){
        Proveedor = new Object(JSON.parse(JSON.stringify(Proveedor)));
        return await this.post(`/proveedores`, Proveedor);
    }
    
    async deleteProveedor(id){
        return await this.delete(`/proveedores/${id}/`);
    }
    
    async getProveedorByLaboratorio(laboratorio){
        return await this.get(`/proveedores/${laboratorio}/`);
    }
    
    async getListProveedor(laboratorio){
        return await this.get(`/proveedores/${laboratorio}`);
    }

    async createProducto(Product){
        Product = new Object(JSON.parse(JSON.stringify(Product)));
        return await this.post(`/producto`, Product);
    }

    async updateProducto(Product){
        Product = new Object(JSON.parse(JSON.stringify(Product)));
        return await this.post(`/producto`, Product);
    }

    async deleteProducto(id){
        return await this.delete(`/producto/${id}/`);
    }

    async getProductoById(id){
        return await this.get(`/producto/${id}`);
    }

    async getInventarioByMedicamento(nombreMedicamento){
        return await this.get(`/productos/${nombreMedicamento}`);
    }

    async createPedido(Pedido){
        Pedido = new Object(JSON.parse(JSON.stringify(Pedido)));
        return await this.post(`/pedidos`, Pedido);
    }

    async getPedidoById(id){
        return await this.get(`/pedidos/${id}`);
    }
}
module.exports = InventarioAPI;