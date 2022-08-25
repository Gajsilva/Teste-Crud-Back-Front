const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;

const products = require('./controllers/productsContoller')
const material = require('./controllers/feedstockcontroller')


app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`)
})

app.get('/', (_request, response) => {
    response.json({ aplicacao: 'CRUD PESSOAS' })
    
})

app.get('/products', products.getProducts)
app.get('/material', material.getMaterial)

app.get('/material/:id', material.getMaterialById)
app.get('/products/:id', products.getProductsById)

app.post('/products', products.createProducts)
app.post('/material', material.createMaterial)

app.put('/products/:id', products.updateProducts)
app.put('/material/:id', material.updateMaterial)

app.delete('/material/:id', material.deleteMaterial)
app.delete('/products/:id', products.deleteProducts)
