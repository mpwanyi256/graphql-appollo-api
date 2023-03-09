import Queries from "./Queries";
import Mutations from "./mutations";

const Resolvers = {
  Query: Queries,
  Mutation: Mutations,
  // enum definitions
  USER_ROLE: {
    admin: 1,
    user: 2,
    super: 3,
  }
};

export default Resolvers;
