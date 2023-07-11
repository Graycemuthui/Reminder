const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Gracewanjiru1573",
  host: "localhost",
  port: 5432,
  database: "reminder",
});

module.exports = pool;
