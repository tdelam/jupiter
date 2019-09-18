import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";

const HTTP_URI = "http://localhost:4000"; // will change to env

export const createClient = () => {
  return new ApolloClient({
    // will change this later when socket is set up.
    link: new HttpLink({ uri: HTTP_URI }),
    cache: new InMemoryCache()
  });
};