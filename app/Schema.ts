// As the name suggests, this file will store the schematics needed to send data to the client
import { gql } from "apollo-server-express"; //will create a schema

const Schema = gql`
    type Person {
        id: ID!
        name: String
    }

    type Query {
        getAllPeople: [Person]
        getPerson(id: ID): Person
    }

    type Mutation {
        addPerson(name: String): Person
    }
`;

export default Schema;