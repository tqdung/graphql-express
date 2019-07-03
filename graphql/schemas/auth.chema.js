export default `
    type AUTH {
        id: String
        username: String
        token: String
    }
    type Mutation {
        login(email: String, password: String): AUTH
    }
` 