const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * from messages");
  return rows;
}

module.exports = {
  getAllMessages,
};
