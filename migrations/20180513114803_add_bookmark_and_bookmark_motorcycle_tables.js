
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bookmarks', function(t) {
    t.increments('id').primary()
    t.text('title') 
    t.timestamps()
  }) 
  .createTable('bookmarks_motorcycles', function(t) {
    t.increments('id').primary()
    t.text('title')
    t.timestamps()    
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('bookmarks_motorcycles')
  .dropTable('bookmarks')
};
