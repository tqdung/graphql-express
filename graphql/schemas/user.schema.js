export default `
    type USER {
        id: String
        email: String
        phone_number: String
        name: String
        role: Int
    }
    type Query {
        getUserInfo: USER
    }
    type Mutation {
        createUser: USER
    }
`