const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "acme_db",
});

mysqlConnection.connect();

module.exports = mysqlConnection;
