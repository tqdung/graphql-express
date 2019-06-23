export default `
    type USER {
        id: String
        email: String
        password: String
        phone_number: String
        name: String
        role: Int
    }
    type Query {
        getUserInfo(email: String, password: String): USER
        getAllUser: [USER]
    }
    type Mutation {
        createUser(username: String, email: String, password: String): USER
    }
`