import { gql } from "@apollo/client";
// To create the language
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

// To Edit the language
export const EDIT_LANGUAGE = gql`
  mutation editLanguage(
    $id: String!
    $active: Boolean!
    $iso_code: String!
    $name: String!
  ) {
    editLanguage(
      language: { id: $id, active: $active, iso_code: $iso_code, name: $name }
    )
  }
`;

// To delete the language
export const DELETE_LANGUAGE = gql`
  mutation deleteLanguage($id: String!) {
    deleteLanguage(id: $id)
  }
`;
