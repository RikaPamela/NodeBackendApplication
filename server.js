const express = require("express");//importing the express modules
const cors = require("cors");//importing the cors modules, an extension that enables web sites 
//to support the CORS (Cross-Origin Resource Sharing) protocol
require("dotenv").config();



var router = require("express").Router();
const app = express();

//Use CORS to allow cross-origin access. CORS is a part of HTTP that lets servers specify any other hosts 
//from which a browser should permit loading of content.
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions)); // configuring cors

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;// you say that the listener can listen (setting the port)to anything thats in the port and 3000 if theres nothing.
// app.listen(300); would not be ideal beacause you'd only listen to 3000.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

