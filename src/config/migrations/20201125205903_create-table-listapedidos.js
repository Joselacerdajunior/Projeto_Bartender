
exports.up = function(knex) {
    return knex.schema.createTable('listapedidos', (table) => {
        table.increments('id');
        table.string('num_comanda', 3).notNullable();
        table.integer('id_produto').notNullable();
        table.string('quantidade').notNullable();
        
        table.foreign('id_produto').references('id').inTable('lista_produtos');
    })
};

exports.down = function(knex) {  
    return knex.schema.dropTable('listapedidos');
};
