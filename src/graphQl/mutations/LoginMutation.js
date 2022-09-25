import { gql } from "@apollo/client";

// Login User
export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    login(user: { email: $email, password: $password })
  }
`;
