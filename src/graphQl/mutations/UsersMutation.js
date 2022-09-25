import { gql } from "@apollo/client";

export const CREATE_MEMBER = gql`
  mutation createMember(
    $username: String
    $password: String
    $email: String
    $permissionId: String
  ) {
    createMember(
      member: {
        username: $username
        password: $password
        email: $email
        permissionId: $permissionId
      }
    )
  }
`;
