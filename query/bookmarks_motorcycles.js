const db = require('./db')

// CREATE
const create = bookmark_motorcycle => db('bookmarks_motorcycles').insert(bookmark_motorcycle, '*')

// READ
const getAll = () => db('bookmark_motorcycle')

const getById = id => 
  db('bookmark_motorcycle').where({ id })
  .then(bookmark_motorcycleList => bookmark_motorcycleList[0])

// UPDATE
const update = (id, updatedBookmark_motorcycle) =>
  db('bookmark_motorcycle').where({ id }).update(updatedBookmark_motorcycle)
  .then(res => {
    if ( res == 1 ) {
      return updatedBookmark_motorcycle
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })
    
// DESTROY
const destroy = id => db('bookmarks_motorcycles').where({ id }).del()

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy
}