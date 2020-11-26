
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('username', 30).notNullable();
        table.string('password', 30).notNullable();
    })
};

exports.down = function(knex) {  
    return knex.schema.dropTable('users');
};
