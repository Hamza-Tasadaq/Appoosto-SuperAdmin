import { gql } from "@apollo/client";

// Permissions

// Create Permission
export const CREATE_PERMISSION = gql`
  mutation createPermission($name: String!) {
    createPermission(permission: { name: $name })
  }
`;

// Delete Permission
export const DELETE_PERMISSION = gql`
  mutation deletePermission($id: String!) {
    deletePermission(id: $id)
  }
`;

// Edit Permission
export const EDIT_PERMISSION = gql`
  mutation editPermission(
    $id: String!
    $name: String!
    $view_permissions: Boolean
    $create_permission: Boolean
    $edit_permission: Boolean
    $delete_permission: Boolean
    $view_admins: Boolean
    $edit_admin: Boolean
    $add_admin: Boolean
    $delete_admin: Boolean
    $view_users: Boolean
    $add_user: Boolean
    $edit_user: Boolean
    $delete_user: Boolean
    $view_plans: Boolean
    $add_plan: Boolean
    $edit_plan: Boolean
    $delete_plan: Boolean
    $view_languages: Boolean
    $add_language: Boolean
    $edit_language: Boolean
    $delete_language: Boolean
    $view_translation: Boolean
    $add_translation: Boolean
    $edit_translation: Boolean
    $delete_translation: Boolean
    $view_icons: Boolean
    $add_icon: Boolean
    $edit_icon: Boolean
    $delete_icon: Boolean
    $impersonate_user: Boolean
    $edit_website: Boolean
  ) {
    editPermission(
      permission: {
        name: $name
        id: $id
        view_permissions: $view_permissions
        create_permission: $create_permission
        edit_permission: $edit_permission
        delete_permission: $delete_permission
        view_admins: $view_admins
        edit_admin: $edit_admin
        add_admin: $add_admin
        delete_admin: $delete_admin
        view_users: $view_users
        add_user: $add_user
        edit_user: $edit_user
        delete_user: $delete_user
        view_plans: $view_plans
        add_plan: $add_plan
        edit_plan: $edit_plan
        delete_plan: $delete_plan
        view_languages: $view_languages
        add_language: $add_language
        edit_language: $edit_language
        delete_language: $delete_language
        view_translation: $view_translation
        add_translation: $add_translation
        edit_translation: $edit_translation
        delete_translation: $delete_translation
        view_icons: $view_icons
        add_icon: $add_icon
        edit_icon: $edit_icon
        delete_icon: $delete_icon
        impersonate_user: $impersonate_user
        edit_website: $edit_website
      }
    )
  }
`;