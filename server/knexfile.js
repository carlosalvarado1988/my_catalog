// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DB_URL,
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: process.env.DB_URL,
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
  },
};
