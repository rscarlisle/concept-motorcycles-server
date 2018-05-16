const db = require('./db')

// CREATE
const create = bookmark => db('bookmarks').insert(bookmark, '*')

// READ
const getAll = () => db('bookmark')

const getById = id => 
  db('bookmark').where({ id })
  .then(bookmarkList => bookmarkList[0])

// UPDATE
const update = (id, updatedBookmark) =>
  db('bookmarks').where({ id }).update(updatedBookmark)
  .then(res => {
    if ( res == 1 ) {
      return updatedBookmark
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })
    
// DESTROY
const destroy = id => db('bookmarks').where({ id }).del()

module.exports = {
  create,
  getAll,
  getById,
  update,
  destroy
}