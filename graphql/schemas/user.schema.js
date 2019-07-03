export default `
    type USER {
        id: String
        email: String
        username: String
        phone_number: String
        role: String
        created: String
    }
    type Query {
        getUserInfo(email: String): USER
        getAllUser: [USER]
    }
    type Mutation {
        createUser(email: String, username: String, password: String, phone_number: String): USER
    }
`