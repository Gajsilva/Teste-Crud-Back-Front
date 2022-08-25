const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema_produtos',
  password: 'Strada',
  port: 5432,
})

const getMaterial = (request, response) => {
  pool.query('SELECT * FROM material ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMaterialById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM material WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMaterial = (request, response) => {
  const { name,inventory } = request.body

  pool.query('INSERT INTO mate (name) VALUES ($1, $2, $3)', [name,inventory ], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Material criada com sucesso.`)
  })
}

const updateMaterial = (request, response) => {
  const id = parseInt(request.params.id)
  const { name,inventory } = request.body

  pool.query(
    'UPDATE products SET name = $1, inventory= $2,  WHERE id = $3',
    [name,inventory ,id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Material ${id} atualizada com sucesso.`)
    }
  )
}

const deleteMaterial = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM material WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Material removido com sucesso com o identificador: ${id}`)
  })
}

module.exports = {
  getMaterial,
  getMaterialById,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  
}