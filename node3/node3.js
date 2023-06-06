const http = require('http');
const fs = require("fs");
const Home = fs.readFileSync("index.html");

const hostname = '127.0.0.1';
//const port = 3000;
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type','text');
  res.end(Home);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});