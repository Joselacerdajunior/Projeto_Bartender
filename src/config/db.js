import knex from 'knex';

const db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: "Qw!10000000",
        database: "unisaldb",
    },
});

export default db;