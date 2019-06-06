import UserController from '../../controllers/user.controller';
export default {
    Query: {
        getUserInfo: () => UserController.getUserInfo(),
    },
    Mutation: {
        createUser: () => UserController.createUser()
    }
}