const mysql = require("mysql");
const variablesRailway = require('../../config')

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rrlalh25",
  database: "lavanderia",
});

// const mysqlConnection = mysql.createConnection({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || 'rrlalh25',
//   database: process.env.DB_NAME || 'lavanderia',
// })

mysqlConnection.connect((err) => {
  if (err) {
		console.log('error', err);
  } else {
		console.log('DB OK');
	}
});


module.exports = mysqlConnection;
