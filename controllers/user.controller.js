import mongoose from 'mongoose';
import userSchema from '../models/user_model';
const User = mongoose.model('users', userSchema, 'users');

const getUserInfo = async userInfo => {
  const { email } = userInfo;
  let user;
  if (email) {
      user = await User.findOne({ email: email });
      if (user) {
        return user;
      }
      let err = new Error("User not found!");
      err.status = 404;
      return err;
  }
  return null;
}

const createUser = async user => {
  let newUser = new User({ ...user });
  await newUser.save();
  return newUser;
}

const getAllUser = async () => {
  let users = await User.find({});
  return users;
}

export default { getUserInfo, createUser, getAllUser }