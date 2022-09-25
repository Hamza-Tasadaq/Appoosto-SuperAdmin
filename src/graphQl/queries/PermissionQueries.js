import { gql } from "@apollo/client";

// To get Permision List
export const GET_PERMISSIONS = gql`
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
          view_permissions
          create_permission
          add_permission
          delete_permission
          view_admins
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
          edit_admin
          delete_translation
          view_icons
          add_icon
          edit_icon
          delete_icon
          impersonate_user
          edit_website
          usersCount
          users {
            username
            id
            email
            class
          }
        }
      }
    }
  }
`;
