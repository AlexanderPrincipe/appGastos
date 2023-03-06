const mysql = require("mysql");
const variablesRailway = require('../../config')

// const mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "lavanderia",
// });

console.log('variablesRailway', variablesRailway);

const mysqlConnection = mysql.createConnection({
  host: variablesRailway.DB_HOST,
  user: variablesRailway.DB_USER,
  password: variablesRailway.DB_PASSWORD,
  database: variablesRailway.DB_NAME,
  port: variablesRailway.DB_PORT
});



mysqlConnection.connect((err) => {
  if (err) {
		console.log('error', err);
  } else {
		console.log('DB OK');
	}
});


module.exports = mysqlConnection;
