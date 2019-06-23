import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is require']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    created: {
      type: Date,
      required: [true, 'Created date is required']
    }
});

// Endcode password before saving it to data base
userSchema.pre("save", function(next) {
  // Encode the user password
  bcrypt.genSalt(saltRounds, (function(err, salt) {
    bcrypt.hash(this.password, salt, (function (err, hash) {
      // save user to db
      console.log("Password encode: ", hash);
      this.password = hash;
      next();
    }).bind(this))
  }).bind(this));
});

module.exports = userSchema;