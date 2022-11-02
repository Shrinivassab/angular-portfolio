const { ApolloServer, gql } = require('apollo-server');

const HygraphAPI = require('./datasources/hygraph');

const typeDefs = gql`
  type Headers {
    headerName: String!,
    email: String!
  }

  type Query {
    headers: [Headers]!
  }
`;

const resolvers = {
  Query: {
    headers: async (parent, args, context) => {
      return await context.dataSources.Hygraph.getHeaders();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ Hygraph: new HygraphAPI() }),
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
