const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  adhar:{
    type: Number,
    required:true
  },
  gender: {
    type: String,
    required: true
  },
  mob: {
    type: Number,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  approval: {
    type: Boolean,
    default:false
  },
  role: {
    type: String,
    required: true
  }
});

const User = mongoose.model('logincredentials', UserSchema); 
module.exports = User;