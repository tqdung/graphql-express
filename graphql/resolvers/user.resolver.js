import UserController from '../../controllers/user.controller';
export default {
    Query: {
        getUserInfo: (email, password) => UserController.getUserInfo(email, password),
        getAllUser: () => UserController.getAllUser(),
    },
    Mutation: {
        createUser: (username, email, password) => UserController.createUser(username, email, password)
    }
}