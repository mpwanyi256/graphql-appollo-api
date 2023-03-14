## GraphQL app in Node.js, Apollo server with TypeScript and graphql-request
A simple GraphQL api server using Apollo.
In this project, we will define simple CRUD operations on a mongo DB database with mongoose.

## Project structure
The project is a decoupled structure of microservices using RabitMQ.
The project is setup in a module structure where every Module has it's own GraphQL schema, queries, resolvers, types, dat. This makes it easy to seperate logic. Inside `app/index.ts` we read all `Schema.graphql` and `Resolvers.ts` from all modules. In this case, `app/Person` is a module of it's own.
![Screenshot 2023-02-17 at 12 31 01](https://user-images.githubusercontent.com/20843520/219606793-b7b44cf2-87ed-4eed-aa48-df26ba06d65b.png)


## Creating a new module
- Create a new folder inside app folder
- Add `Schema.graphql` which will hold the module graphQL schema
- Add `Resolvers.ts` which will have all your queries and mutation resolvers
- You can add optional files like `types.d.ts` for all  your module typescript definitions and Database connection files or controllers.

## Setup
- Setup RabitMQ locally or use an online version
- Clone the repo
- Run `yarn` or `npm install` to install project dependencies
- The app will be served on a GraphQL server using `Apollo`, the library generates a “frontend” which looks like so:
![Screenshot 2023-02-17 at 11 53 12](https://user-images.githubusercontent.com/20843520/219598294-8ca014a5-955b-4821-94b4-1a4cc1049465.png)



## About me
I am a full stack Javascript developer with over 6 years enjoying shipping Javascript projects.
