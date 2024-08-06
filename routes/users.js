var express = require('express');
var router = express.Router();
require('dotenv').config();
const mongoose = require('mongoose');

const mongouri=process.env.MONGODB_URI;

// mongoose.connect("mongodb://127.0.0.1:27017/loginInfo");

mongoose.connect(mongouri,{
  serverSelectionTimeoutMS: 30000,

}).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas:', err);
});

const userSchema=mongoose.Schema({
  name:String,
  password:String,
  
});





module.exports = router;
module.exports = mongoose.model("userModel",userSchema);

