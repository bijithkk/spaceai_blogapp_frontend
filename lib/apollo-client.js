import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://spaceai-blogapp-backend.onrender.com/graphql', // Backend URL http://localhost:4000/graphql
  }),
  cache: new InMemoryCache(),
});

export default client;
