import AuthController from '../../controllers/auth.controller';
export default {
    Mutation: {
        login: (email, password) => AuthController.login(email, password)
    }
}