import UserController from '../../controllers/user.controller';
export default {
    Query: {
        getUserInfo: () => UserController.getUserInfo(),
        getAllUser: () => UserController.getAllUser(),
    },
    Mutation: {
        createUser: () => UserController.createUser()
    }
}