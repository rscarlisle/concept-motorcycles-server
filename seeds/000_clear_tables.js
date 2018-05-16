
exports.seed = (knex, Promise) => 
   knex('comments').del() 
   .then(() => knex('bookmarks_motorcycles').del())
  //  .then(() => knex('motorcycles').del())
  //  .then(() => knex('users').del())
  //  .then(() => knex('profiles').del()) 
   null//.then(() => knex('bookmarks').del()) 

