import UserController from '../../controllers/user.controller';
export default {
    Query: {
        getUserInfo: (email) => UserController.getUserInfo(email),
        getAllUser: () => UserController.getAllUser(),
    },
    Mutation: {
        createUser: (email, username, password, phone_number) => UserController.createUser(email, username, password, phone_number)
    }
}