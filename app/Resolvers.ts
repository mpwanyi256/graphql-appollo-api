// This module will handle user commands. We will learn about resolvers later in this article
import PeopoleQueries from "./Person/Queries";
import PeopoleMutations from "./Person/mutations";

const Resolvers = {
  Query: {
    ...PeopoleQueries
  },

  Mutation: {
    ...PeopoleMutations
  }
};

export default Resolvers;
