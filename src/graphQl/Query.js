import { gql } from "@apollo/client";

// To get logged In user
export const LOGGED_IN_USER = gql`
  query getLoggedInUser {
    veiwer {
      id
      username
      class
    }
  }
`;

// To get Pagination Details
export const GET_PAGINATION_DATA = gql`
  query getPermissions($page: Int, $size: Int) {
    getAdmin(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
      }
    }
  }
`;

// To get Permision List
export const GET_PERMISSIONS = gql`
  query getPermissions($page: Int, $size: Int) {
    getAdmin(pageinfo: { page: $page, size: $size }) {
      message
      responscedata {
        totalItems
        totalPages
        currentPage
        admins {
          username
          permission {
            name
            view_admins
            create_admin
            add_admin
            delete_admin
            view_users
            add_user
            edit_user
            delete_user
            view_plans
            add_plan
            edit_plan
            delete_plan
            view_languages
            add_language
            edit_language
            delete_language
            view_translation
            add_translation
            edit_translation
            delete_translation
            view_icons
            add_icon
            edit_icon
            delete_icon
            impersonate_user
            edit_website
          }
        }
      }
    }
  }
`;
