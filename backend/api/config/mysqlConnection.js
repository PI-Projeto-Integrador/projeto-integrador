const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '890999000',
  database: 'acme_db',
});

mysqlConnection.connect();

module.exports = mysqlConnection;
