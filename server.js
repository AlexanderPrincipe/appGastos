const http = require('http');
const app = require('./app');
const variablesRailway = require('./config')

const server = http.createServer(app);

console.log('CONFIGGG', variablesRailway)
server.listen(variablesRailway.DB_PORT || 3000);