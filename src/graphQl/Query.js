import { gql } from "@apollo/client";

export const LOGGEDINUSERAUTH = gql`
query getLoggedInUser{
    veiwer{
    id
    username
    class
  }
}
`;
