
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.timestamps()
  })
  .table('profiles', function(t) {
    t.timestamps()
  })
  .table('motorcycles', function(t) {
    t.timestamps()
  })
  .table('comments', function(t) {
    t.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.dropTimestamps()
  })
  .table('profiles', function(t) {
    t.dropTimestamps()
  })
  .table('motorcycles', function(t) {
    t.dropTimestamps()
  })
  .table('comments', function(t) {
    t.dropTimestamps()
  })
};
