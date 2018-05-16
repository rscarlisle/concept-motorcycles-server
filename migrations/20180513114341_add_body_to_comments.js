
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function(t) {
    t.text('body')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function(t) {
    t.dropColumn('body');
  });
};


// table.dropColumn('name');