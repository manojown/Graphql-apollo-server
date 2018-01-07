import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema/user';
import resolvers from './resolver/user';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

console.log('typeDefs',typeDefs)
console.log('resolvers',resolvers)
mongoose.connect('mongodb://localhost/test');

const User = mongoose.model('User', { name: String });

const PORT = 3000;

const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { User } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
