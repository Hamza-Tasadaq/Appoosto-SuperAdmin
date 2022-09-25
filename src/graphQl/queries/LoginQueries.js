import { gql } from "@apollo/client";

// To get logged In user
export const LOGGED_IN_USER = gql`
  query getLoggedInUser {
    veiwer {
      id
      username
      class
    }
  }
`;