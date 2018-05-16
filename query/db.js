const knex = require('knex') 

// process.NODE_ENV

const environment = 'development' // This will change based on test or production. TODO 

const envConfig = require('../knexfile')[environment] 

//Type of connection is a function 
const connection = knex(envConfig) 

module.exports = connection