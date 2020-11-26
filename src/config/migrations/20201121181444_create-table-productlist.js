
exports.up = function(knex) {
    return knex.schema.createTable('lista_produtos', (table) => {
        table.increments('id');
        table.string('name', 30).notNullable();
        table.string('description').notNullable();
        table.string('src_image').notNullable();
        table.float('value').notNullable();
      })
};

exports.down = function(knex) {  
    return knex.schema.dropTable('lista_produtos');
};
