const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * from messages");
  return rows;
}

async function getMessageById(id) {
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
      id,
    ]);

    return result.rows[0]; // Adjust this according to your actual result structure
  } catch (error) {
    console.error("Error fetching message by ID:", error);
    throw error;
  }
}

module.exports = {
  getAllMessages,
  getMessageById,
};
