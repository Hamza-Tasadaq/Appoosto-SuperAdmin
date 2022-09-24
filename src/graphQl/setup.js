import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import {ApolloClient , InMemoryCache} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getItem } from "../services";

const httpLink = new HttpLink({
  uri: "https://www.appoosto.com/api/graphql", // use https for secure endpoint
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const wsLink = new WebSocketLink({
  uri: "wss://www.appoosto.com/api/graphql/websocket", // use wss for a secure endpoint
  options: {
    reconnect: true,
  },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  authLink.concat(wsLink),
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export { client };