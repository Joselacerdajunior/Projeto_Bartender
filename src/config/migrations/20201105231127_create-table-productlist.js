
exports.up = function(knex) {
  return knex.schema.createTable('lista_produtos', (table) => {
    table.increments('id');
    table.string('name', 200).notNullable();
    table.string('ingredients').notNullable();
    table.string('value').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('lista_produtos');
};
