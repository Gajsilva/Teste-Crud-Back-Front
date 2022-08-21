const express = require('express')

const products = require('./controllers/productsContoller')

const routes = new express.Router();

routes.get('/products', products.getProducts)
routes.get('/products/:id', products.getProductsById)
routes.post('/products', products.createProducts)
routes.put('/products/:id', products.updateProducts)
routes.delete('/products/:id', products.deleteProducts)

module.exports = routes;