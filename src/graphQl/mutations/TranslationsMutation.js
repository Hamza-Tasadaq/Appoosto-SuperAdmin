import { gql } from "@apollo/client";

export const CREATE_LANGUAGE = gql`
  mutation createLanguage(
    $iso_code: String!
    $name: String!
    $active: Boolean!
  ) {
    createLanguage(
      language: { iso_code: $iso_code, name: $name, active: $active }
    )
  }
`;
