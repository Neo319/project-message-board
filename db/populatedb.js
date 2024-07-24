#! /usr/bin/env node

//use connection string to db as argument when calling this function.

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan', "Hello World!"),
  ('Odin', "Hi There!" ),

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
