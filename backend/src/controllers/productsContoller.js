const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postres',
  host: 'localhost',
  database: 'sistema_products',
  password: 'Strada',
  port: 5432,
})

const getProducts = (request, response) => {
  pool.query('SELECT * FROM products ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductsById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProducts = (request, response) => {
  const { name,inventory } = request.body

  pool.query('INSERT INTO products (name) VALUES ($1, $2, $3)', [name,inventory ], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Produto criada com sucesso.`)
  })
}

const updateProducts = (request, response) => {
  const id = parseInt(request.params.id)
  const { name,inventory } = request.body

  pool.query(
    'UPDATE products SET name = $1, inventory= $2,  WHERE id = $3',
    [name,inventory ,id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto ${id} atualizada com sucesso.`)
    }
  )
}

const deleteProducts = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM products WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Produto removido com sucesso com o identificador: ${id}`)
  })
}

module.exports = {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
  
}