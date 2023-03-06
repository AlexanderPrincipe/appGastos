const http = require('http');
const app = require('./app');
const variablesRailway = require('./config')

const server = http.createServer(app);

console.log('CONFIGGG', variablesRailway)
server.listen(variablesRailway.PORT || 3000);