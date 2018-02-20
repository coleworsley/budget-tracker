exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('user', table => {
      table.increments('id').primary();
      table.string('email');
      table.string('password');
      table.string('first_name');
      table.string('last_name');
      table.timestamps(true, true);
    })
  ]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('user')]);
