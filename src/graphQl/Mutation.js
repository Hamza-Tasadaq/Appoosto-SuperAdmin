import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    login(user: { email: $email, password: $password })
  }
`;

export const CREATE_PERMISSION = gql`
  mutation createPermission($name: String) {
    createPermission(permission: { name: $name })
  }
`;
