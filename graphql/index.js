import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schemas/index';
import resolvers from './resolvers/index';

export default makeExecutableSchema({typeDefs, resolvers});