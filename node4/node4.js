const http = require('http');
const fs = require("fs");
const Home = fs.readFileSync("home.html");
const About = fs.readFileSync("about.html");
const Contact = fs.readFileSync("contact.html");

const hostname = '127.0.0.1';
//const port = 3000;
const port = 80;

const server = http.createServer((req, res) => {
    url = req.url;
  res.statusCode = 200;
  res.setHeader('content-type','text/html');
  if(url=="/")
  {
    res.end(Home);
  }
  else if(url=="/about")
  {
    res.end(About);
  }
  else if(url=="/contact")
  {
    res.end(Contact);
  }
  else
  {
    res.statusCode = 404;
    res.end("404 not found");
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});