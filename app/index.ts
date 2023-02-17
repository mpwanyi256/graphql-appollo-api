// Our main file. This will execute and run our Express GraphQL server
import { ApolloServer } from "apollo-server-express";
import { loadFiles } from "@graphql-tools/load-files";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: await loadFiles('app/**/Schema.graphql'),
    resolvers: await loadFiles('app/**/Resolvers.ts'),
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer();
