const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'GamingEc$mmerce';
const encryptionKey = bcrypt.genSaltSync(10);

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
    type: String, // Change type to String
    required:true
  },
  gender: {
    type: String,
    required: true
  },
  mob: {
    type: String, // Change type to String
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
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
});

// Middleware to encrypt sensitive fields before saving
UserSchema.pre('save', function(next) {
  try {
    this.mob = jwt.sign(this.mob, encryptionKey);
    this.email = jwt.sign(this.email, encryptionKey);
    this.adhar = jwt.sign(this.adhar, encryptionKey);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to decrypt sensitive fields before returning
UserSchema.methods.decryptSensitiveFields = function () {
  this.mob = jwt.verify(this.mob, encryptionKey);
  this.email = jwt.verify(this.email, encryptionKey);
  this.adhar = jwt.verify(this.adhar, encryptionKey);
};

const User = mongoose.model('logincredentials', UserSchema); 
module.exports = User;
