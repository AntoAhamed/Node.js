const express = require('express')
const path = require("path")
const fs = require("fs")
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const app = express()
const port = 80

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/user_db');
  console.log("Connection build successfully");
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  feedback: String
});

const Contact = mongoose.model('contact', contactSchema);

//EXPRESS SPECIFIC STUFFS
app.use("/static", express.static("static")) //For serving static files
app.use(express.urlencoded())

//PUG SPACIFIC STUFFS
app.set("view engine", "pug") //Set the template engine as pug
app.set("views", path.join(__dirname,"views")) //Set the views directory

//ENDPOINTS
app.get('/', (req, res) => {
    res.render("home.pug");
})

app.get('/about', (req, res) => {
    res.render("about.pug");
})

app.get('/contact', (req, res) => {
    res.render("contact.pug");
})

/*app.post('/', (req, res) => {
  Name = req.body.name;
  Email = req.body.email;
  Subject = req.body.subject;
  Message = req.body.message;

  let content = `The name of the client is ${Name}, email: ${Email}, subject: ${Subject} and the message is ${Message}`;
  fs.writeFileSync("output.txt", content);

  const params ={notify: "Your message successfully delivered"};
  res.render("index.pug", params);
})*/

app.post('/contact', (req, res) => {
  var myData = new Contact(req.body);
  myData.save().then(()=>{
    res.send("Data is successfully inserted in the database");
  }).catch(()=>{
    res.send("Data insertion is unsuccessfull");
  });
})

//START THE SERVER
app.listen(port, () => {
  console.log(`Our app listening on port ${port}`)
})