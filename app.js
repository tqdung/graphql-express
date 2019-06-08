import express from'express';
import graphqlHTTP from'express-graphql';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from'cors';

import schema from './graphql/index';
// console.log(schema)
const app = express();

app.use('*', cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))


app.listen(process.env.PORT || 3000, ()=> console.log(`Server is running on port 3000`));
