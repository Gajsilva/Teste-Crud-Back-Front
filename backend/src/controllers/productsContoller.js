const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema_produtos',
  password: 'Strada',
  port: 5432,
})

const getProdutos = (request, response) => {
  pool.query('SELECT * FROM produtos ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProdutosById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM produtos id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProdutos = (request, response) => {
  const { nome, inventory } = request.body

  pool.query('INSERT INTO produtos (nome, inventory) VALUES ($1, $2)',[nome,  inventory], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Produto criado com sucesso.`)
  })
}

const updateProdutos = (request, response) => {
  const id = parseInt(request.params.id)
  const { nome, inventory } = request.body

  pool.query(
    'UPDATE produtos SET nome = $1, inventory= $2,  WHERE id = $3',
    [nome, inventory ,id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Produto ${id} atualizada com sucesso.`)
    }
  )
}

const deleteProdutos = async (request, response) => {
  const id = parseInt(request.params.id)

  await pool.query('DELETE FROM produtos WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    response.status(203).send(`Produto removido com sucesso com o identificador: ${id}`)
  })
}

module.exports = {
  getProdutos,
  getProdutosById,
  createProdutos,
  updateProdutos,
  deleteProdutos,
  
}