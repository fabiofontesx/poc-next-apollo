import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:3300/graphql'
    }),
    cache: new InMemoryCache()
  });
};

const apolloClient = createApolloClient();

export default apolloClient;
