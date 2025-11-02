const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
// const multer = require('multer')// used for form-data request body
const app = express();


// Middleware
app.use(express.json()) //body parser
app.use(express.urlencoded({extended: false}))


// routes
app.use('/api/products', productRoute );




app.get("/", (req, res) => {
  res.send("Hello from Node API server!");
});












mongoose
  .connect(
    "mongodb+srv://dagim79:<my-password>@backenddb.aqbo2jf.mongodb.net/Node-API?appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database.");

    
    app.listen(4010, () => {
        console.log("Running on: http://localhost:4010");
    });
  })
  .catch((err) => {
    console.log("Connection Failed: ", err);
  });
