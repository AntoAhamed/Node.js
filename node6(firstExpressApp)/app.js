const express = require('express')
const pug = require("pug")
const path = require("path")
const fs = require("fs")
const app = express()
const port = 80

//EXPRESS SPECIFIC STUFFS
app.use("/static", express.static("static")) //For serving static files
app.use(express.urlencoded())

//PUG SPACIFIC STUFFS
app.set("view engine", "pug") //Set the template engine as pug
app.set("views", path.join(__dirname,"views")) //Set the views directory

/*
Routing examples...
app.get('/', (req, res) => {
  res.send('This is our home page.')
})

app.get('/about', (req, res) => {
    res.send('This is our about page.')
})

app.get('/contact', (req, res) => {
    res.send('This is our contact page.')
})
*/

//ENDPOINTS
app.get('/', (req, res) => {
  const title = "Form";
  const desc = "This is a paragraph";
  const params = {title, desc};
  res.render("index.pug", params);
})

app.post('/', (req, res) => {
  Name = req.body.name;
  Email = req.body.email;
  Subject = req.body.subject;
  Message = req.body.message;

  let content = `The name of the client is ${Name}, email: ${Email}, subject: ${Subject} and the message is ${Message}`;
  fs.writeFileSync("output.txt", content);

  const params ={notify: "Your message successfully delivered"};
  res.render("index.pug", params);
})

//START THE SERVER
app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})