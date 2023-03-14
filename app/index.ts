// Our main file. This will execute and run our Express GraphQL server
import { ApolloServer } from "apollo-server-express";
import { loadFiles } from "@graphql-tools/load-files";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
require('dotenv').config()
import mongoose from 'mongoose';

// RabitMQ
import RabitMQ from './plugins/rabitMq'

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: await loadFiles('app/**/graphql/Schema.graphql'),
    resolvers: await loadFiles('app/**/graphql/Resolvers.ts'),
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;

  await new Promise<void>((resolve) =>{
    const DB = process.env.MQ_LOCAL === 'test' ? 'test' : process.env.DB_NAME
    // Connect to RabitMQ
    RabitMQ.init(process.env.MQ_LOCAL, () => {
      mongoose
        .set('strictQuery', true)
        .connect(`mongodb://localhost:27017/${DB}`)
        .then(async () => {
          await server.start(); //start the GraphQL server.
          server.applyMiddleware({ app });
          console.log('connected to mongoDB successfully')
          httpServer.listen({ port: 4000 }, resolve)
          console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
        })
        .catch(e => {
          console.log('Connection to mongoDB server failed')
        })

        process.on('beforeExit', async () => {
          RabitMQ.closeConnection()
          await mongoose.disconnect()
        })
    })
  }
  );
})()
