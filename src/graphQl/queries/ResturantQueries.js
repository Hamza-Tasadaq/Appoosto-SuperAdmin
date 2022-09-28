import { gql } from "@apollo/client";

export const GET_RESTAURANTS = gql`
  query getRestaurants($page: Int, $size: Int) {
    getRestaurants(pageInfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        restaurants {
          id
          name
          createdAt
          users {
            username
            email
          }
        }
      }
    }
  }
`;
