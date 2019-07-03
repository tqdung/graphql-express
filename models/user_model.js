import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Username is require']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    default: 'user'
  },
  phone_number: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

// Endcode password before saving it to data base
userSchema.pre("save", function (next) {
  // Encode the user password
  bcrypt.genSalt(saltRounds, (function (err, salt) {
    bcrypt.hash(this.password, salt, (function (err, hash) {
      // save user to db
      this.password = hash;
      next();
    }).bind(this))
  }).bind(this));
});

module.exports = userSchema;