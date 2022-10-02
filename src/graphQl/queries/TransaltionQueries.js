import { gql } from "@apollo/client";

export const GET_LANGUAGES = gql`
  query getLanguage($page: Int, $size: Int) {
    getLanguage(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        languages {
          id
          iso_code
          name
          active
        }
      }
    }
  }
`;
