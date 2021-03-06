/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
require('./lib/connect');

const connect = require('./lib/connect');
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/images';
connect(dbUri);

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('server running at', server.address());
});



