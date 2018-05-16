
exports.up = function(knex, Promise) {
  return knex.schema.table('bookmarks_motorcycles', function(t) {
     t.integer('motorcycle_id').references('id').inTable('motorcycles')
     t.integer('bookmark_id').references('id').inTable('bookmarks')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('bookmarks_motorcycles', function(t) {
    t.dropColumn('motorcycle_id')
    t.dropColumn('bookmark_id')
  });
};


