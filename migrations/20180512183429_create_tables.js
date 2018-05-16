exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function(t) {
    t.increments('id').primary()
    t.text('name')
    t.text('summary')
    t.text('image_url')
  })
  .createTable('users', function(t) {
    t.increments('id').primary()
    t.text('email')
    t.text('username')
    t.text('password')
    t.integer('profile_id').references('id').inTable('profiles')
  })
  .createTable('motorcycles', function(t) {
    t.increments('id').primary()
    t.text('name')
    t.text('make')
    t.text('model')
    t.text('color')
    t.text('price')
    t.text('image_url')
    t.text('detail')
    t.integer('profile_id').references('id').inTable('profiles')
  })
  .createTable('comments', function(t) {
    t.increments('id').primary()
    t.integer('profile_id').references('id').inTable('profiles')
    t.integer('motorcycle_id').references('id').inTable('motorcycles')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('comments')
  .dropTable('motorcycles')
  .dropTable('users')
  .dropTable('profiles')
}
