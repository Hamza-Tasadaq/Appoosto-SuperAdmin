import { gql } from "@apollo/client";

// To get Pagination Details
export const GET_PAGINATION_DATA = gql`
  query getPermissions($page: Int, $size: Int) {
    getPermission(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
      }
    }
  }
`;

// To get the Permissions Id
export const GET_PERMISSIONS_ID = gql`
  query getPermissions($page: Int, $size: Int) {
    getPermission(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        permissions {
          id
          name
        }
      }
    }
  }
`;

// To get the Users

export const GET_ADMINS = gql`
  query getAdmin($page: Int, $size: Int) {
    getAdmin(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        admins {
          username
          id
          email
          password
          permission {
            name
            id
          }
        }
      }
    }
  }
`;
