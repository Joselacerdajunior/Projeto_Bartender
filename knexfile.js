// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'unisaldb',
      user: 'postgres',
      password: 'Qw!10000000'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/config/migrations',
      loadExtensions: ['.js']
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
