const db = require('./db') 

/* CREATE */ 
const create = profile => db('profiles').insert(profile, '*')

/* READ */
const getAll = () => db('profiles')

const getById = id => 
  db('profiles').where({ id })
  .then(profileList => profileList[0])

/* UPDATE  */ 
const update = (id, updatedProfile) => 
  db('profiles').where({ id }).update(updatedProfile)
  .then(res => {
    if(res == 1) {
      return updatedProfile
    } else {
      return {
        error: 'Error updating entry'
      }
    }
  })

/* DESTROY */ 
const destroy = id => db('profiles').where({ id }).del()

 module.exports = {
   create,
   getAll, 
   getById, 
   update, 
   destroy
 }