import express from'express';
import graphqlHTTP from'express-graphql';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import cors from'cors';
import mongoose from 'mongoose';

import { DATA_BASE } from './config';
import schema from './graphql/index';
import bodyParser from 'body-parser';

mongoose.Promise = global.Promise;
mongoose.connect(DATA_BASE.MONGO_DB_URI, { useNewUrlParser: true, useCreateIndex: true });
let db = mongoose.connection;

const PORT = process.env.PORT || 3000;

db.on('error', () => { console.log('Connection error') });
db.once('open', () => {
  const app = express();
  console.log('Connected');

  app.use('*', cors());
  app.use(bodyParser({ limit: '50mb', extended: true }));


  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

  app.listen(PORT, ()=> console.log(`Server is running on port 3000`));
});
