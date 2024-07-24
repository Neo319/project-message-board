#!/usr/bin/env node

// Use connection string to db as argument when calling this function.

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (255),
  text VARCHAR (255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (name, text)
VALUES
  ('Bryan', 'Hello World!'),
  ('Odin', 'Hi There!');
`;

async function main() {
  if (process.argv.length < 3) {
    console.error("Please provide the connection string as an argument");
    process.exit(1);
  }

  const connectionString = process.argv[2];
  console.log("Seeding...");
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    await client.query(SQL);
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    await client.end();
  }
  console.log("Done");
}

main();
