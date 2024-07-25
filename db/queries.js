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

async function insertMessage(message) {
  try {
    const query =
      "INSERT INTO messages (name, text, added) VALUES ($1, $2, $3)";
    const values = [message.name, message.text, message.added];

    await pool.query(query, values);
  } catch (error) {
    console.error("Error inserting message", error);
    throw error;
  }
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
