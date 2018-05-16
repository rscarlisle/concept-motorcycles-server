const db = require('./db')

// CREATE
const create = comment => db('comments').insert(comment, '*')

// READ
const getAll = () => db('comments')

const getById = id => 
  db('comments').where({ id })
  .then(commentList => commentList[0])

// UPDATE
const update = (id, updatedComment) =>
  db('comments').where({ id }).update(updatedComment)
  .then(res => {
    if ( res == 1 ) {
      return updatedComment
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })
    
// DESTROY
const destroy = id => db('comments').where({ id }).del()

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy
}