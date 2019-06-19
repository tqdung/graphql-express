import mongoose from 'mongoose';
import userSchema from '../models/user_model';
const User = mongoose.model('user', userSchema, 'user');

const getUserInfo = () => {
    return {
        id: '1',
        email: 'abc@xyz.com',
        phone_number: '0123456789',
        name: 'Trần Quốc Dũng',
        role: '1'
    }
}

const createUser = async user => {
    console.log(user);
    return new User({
        user,
        created: Date.now()
    });
}

const getAllUser = () => {

}

export default { getUserInfo, createUser, getAllUser }