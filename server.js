import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema }  from 'graphql-tools';
import typeDefs from './schema/user';
import resolvers from './resolver/user';
import Collection from './config/connection'
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/test');

const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema , context : { Collection } }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
