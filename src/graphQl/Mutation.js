import { gql } from "@apollo/client";

// Login User
export const LOGIN_USER = gql`
  mutation loginUser($email: String, $password: String) {
    login(user: { email: $email, password: $password })
  }
`;

// Permissions
export const CREATE_PERMISSION = gql`
  mutation createPermission($name: String) {
    createPermission(permission: { name: $name })
  }
`;
