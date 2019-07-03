import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userSchema from '../models/user_model';
const User = mongoose.model('users', userSchema, 'users');

const secretkey = "secretkey";

const login = async ({email, password}) => {
    let user = await User.findOne({ email: email });
    if (user) {
        let compare = bcrypt.compareSync(password, user.password);
        if (compare) {
            let token = jwt.sign({ id: user.id, role: user.role }, secretkey, {
                expiresIn: 60 * 60 * 100000
            });
            return {
                id: user.id,
                username: user.username,
                token: token
            }
        }
        let err = new Error('Password incorrect!');
        err.status = 204;
        return err;
    }
    return null;
}

export default { login }