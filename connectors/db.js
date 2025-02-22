// import the knex library that will allow us to
// construct SQL statements
const knex = require('knex');

// define the configuration settings to connect
// to our local postgres server
const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Nokia1234',
    database: 'M2',
  }
};

// create the connection with postgres
const db = knex(config);

// expose the created connection so we can
// use it in other files to make sql statements
module.exports = db;