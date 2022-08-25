const express = require('express')

const products = require('./controllers/productsContoller')
const material = require('./controllers/feedstockcontroller')

const routes = new express.Router();

routes.get('/products', products.getProducts)
routes.get('/material', material.getMaterial)

routes.get('/material/:id', material.getMaterialById)
routes.get('/products/:id', products.getProductsById)

routes.post('/products', products.createProducts)
routes.post('/material', material.createMaterial)

routes.put('/products/:id', products.updateProducts)
routes.put('/material/:id', material.updateMaterial)

routes.delete('/material/:id', material.deleteMaterial)
routes.delete('/products/:id', products.deleteProducts)

module.exports = routes;