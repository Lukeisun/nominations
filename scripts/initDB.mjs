import sqlite3 from "sqlite3";
const db = new sqlite3.Database(
  "../user_submissions.db",
  sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
  },
);
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  email TEXT,
  nominationIdArray TEXT)`);
