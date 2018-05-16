const db = require('./db')

// CREATE
const create = motorcycle => db('motorcycles').insert(motorcycle, '*')

// READ
const getAll = () => db('motorcycles')

const getById = id => 
  db('motorcycles').where({ id })
  .then(motorcycleList => motorcycleList[0])

// UPDATE
const update = (id, updatedMotorcycle) =>
  db('motorcycles').where({ id }).update(updatedMotorcycle)
  .then(res => {
    if ( res == 1 ) {
      return updatedMotorcycle
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })
    
// DESTROY
const destroy = id => db('motorcycles').where({ id }).del()

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy
}