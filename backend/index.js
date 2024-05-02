const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
const app = express()
connectToMongo()
app.use(cors());
app.use(express.json())


// Defining the api with files












app.listen(5000,()=>{
   console.log(`App Listening on port 5000 `)
})