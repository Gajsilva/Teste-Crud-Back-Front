const express = require('express')

const produtos = require('./controllers/productsContoller')
const material = require('./controllers/feedstockcontroller')

const routes = new express.Router();

routes.get('/produtos', produtos.getProdutos)
routes.get('/material', material.getMaterial)

routes.get('/material/:id', material.getMaterialById)
routes.get('/produtos/:id', produtos.getProdutosById)

routes.post('/produtos', produtos.createProdutos)
routes.post('/material', material.createMaterial)

routes.put('/produtos/:id', produtos.updateProdutos)
routes.put('/material/:id', material.updateMaterial)

routes.delete('/material/:id', material.deleteMaterial)
routes.delete('/produtos/:id', produtos.deleteProdutos)

module.exports = routes;