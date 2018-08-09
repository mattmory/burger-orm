// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-01.cleardb.net",
  port: 3306,
  user: "b25f971ee4511a",
  password: "12cab57a",
  database: "heroku_4ff3c9a9140dee7"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
