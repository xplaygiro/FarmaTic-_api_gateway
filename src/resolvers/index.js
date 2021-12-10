const pedidosResolver = require('./pedidos_resolver');
const productosResolver = require('./productos__resolver');
const proveedorResolver = require('./proveedor_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(authResolver, pedidosResolver, productosResolver, proveedorResolver);

module.exports = resolvers;