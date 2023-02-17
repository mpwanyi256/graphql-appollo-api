## GraphQL app in Node.js, Apollo server with TypeScript and graphql-request
A simple GraphQL api server using Apollo.
In this project, we will define simple Queries and mutations to get, add and update our `people dataset array`.
> We will use MondoDB later to replace the dataset cosntant of our `people dataset array`.

## Project structure
The project is setup in a module structure where every Module has it's own GraphQL schema, queries and resolvers. This makes it easy to seperate logic. Inside `app/index.ts` we read all `Schema.graphql` and `Resolvers.ts` from all modules. In this case, `app/Person` is a module of it's own.

## Creating a new module
- Create a new folder inside app folder
- Add `Schema.graphql` which will hold the module graphQL schema
- Add `Resolvers.ts` which will have all your queries and mutation resolvers
- You can add optional files like `types.d.ts` for all  your module typescript definitions and Database connection files or controllers.

## Setup
- Clone the repo
- Run `yar/npm install` to install project dependencies
- The app will be served on a GraphQL server using `Apollo`, the library generates a “frontend” which looks like so:
![Screenshot 2023-02-17 at 11 53 12](https://user-images.githubusercontent.com/20843520/219598294-8ca014a5-955b-4821-94b4-1a4cc1049465.png)


## About me
I am a full stack Javascript developer with over 6 years enjoying shipping Javascript projects.

## Connect with me
- [LinkedIn](https://www.linkedin.com/in/mpwanyi-samuel-402b36108/)
