const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  database: 'acme_db',
  user: 'root',
  password: '890999000'
});

conn.connect(function (err) {
  if (err) throw err;
  console.log('Connected to mysql!');
});

module.exports = conn;
