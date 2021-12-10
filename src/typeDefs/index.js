//Se llama a todos los TypeDefs - Call all TypeDefs.
const authTypeDefs      = require('./auth_type_defs');
const pedidosTypeDefs     = require('./pedidos_type_defs');
const proveedorTypeDefs = require('./proveedor_type_defs');
const productTypeDefs   = require('./productos_type_defs');

const schemaArrays = [authTypeDefs, pedidosTypeDefs, proveedorTypeDefs, productTypeDefs];
module.exports     = schemaArrays;