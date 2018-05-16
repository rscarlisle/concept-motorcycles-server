const comments = require('../seed_data/comments.js')

exports.seed = (knex, Promise) => 
  knex('comments').insert(comments);
  
