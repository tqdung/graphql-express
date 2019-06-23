import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userSchema from '../models/user_model';
const User = mongoose.model('users', userSchema, 'users');

const getUserInfo = async userInfo => {
  const { email, password } = userInfo;
  let user;
  if (email) {
      user = await User.findOne({ email: email });
      let compare = bcrypt.compareSync(password, user.password);
      if (compare) {
        return user;
      }
      let err = new Error("Password is incorrect!");
      err.status = 204;
      throw err;
  }
  return null;
}

const createUser = async user => {
  const { username, email, password } = user;
  let newUser = new User(
    {
      ...user,
      created: Date.now()
    });
  await newUser.save();
  return newUser;
}

const getAllUser = () => {

}

export default { getUserInfo, createUser, getAllUser }