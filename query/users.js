const db = require('./db') 

/* CREATE */ 
const create = user => db('users').insert(user, '*')

/* READ */
const getAll = () => db('users')

const getById = id => 
  db('users').where({ id })
  .then(userList => userList[0]) 

const getByEmail = email => 
  db('users').where({ email })
  .then(userList => userList[0]) 

/* UPDATE  */ 
const update = (id, updatedUser) => 
  db('users').where({ id }).update(updatedUser)
  .then(res => {
    if(res == 1) {
      return updatedUser
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })

/* DESTROY */ 
const destroy = id => db('users').where({ id }).del()

 module.exports = {
   create,
   getAll, 
   getById, 
   getByEmail,
   update, 
   destroy
 }