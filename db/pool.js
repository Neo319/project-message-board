const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: process.env.LOCAL_DB_CONNECT_STRING,
});
