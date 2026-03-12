const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./status.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    mobile_number TEXT,
    machine TEXT,
    motor_hp TEXT,
    delivery_challan TEXT,
    missing_parts TEXT,
    advance REAL,
    repair_status INTEGER,
    delivery_status INTEGER
  )`);
});

module.exports = db;
