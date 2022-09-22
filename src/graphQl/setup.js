import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

const httpLink = new HttpLink({
  uri: "http://3.224.127.224/api/graphql", // use https for secure endpoint
});

// const wsLink = new WebSocketLink({
//   uri: "ws://3.224.127.224/api/graphql/websocket", // use wss for a secure endpoint
//   options: {
//     reconnect: true,
//   },
// });

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  // wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export { client };
