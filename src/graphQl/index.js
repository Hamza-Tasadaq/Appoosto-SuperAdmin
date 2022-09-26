export * from "./setup";

// Mutations
export { LOGIN_USER } from "./mutations/LoginMutation";
export {
  CREATE_PERMISSION,
  DELETE_PERMISSION,
  EDIT_PERMISSION,
} from "./mutations/PermissionsMutation";
export { CREATE_MEMBER } from "./mutations/UsersMutation";

// Queries
export { LOGGED_IN_USER } from "./queries/LoginQueries";
export { GET_PERMISSIONS } from "./queries/PermissionQueries";
export {
  GET_PAGINATION_DATA,
  GET_PERMISSIONS_ID,
  GET_ADMINS,
} from "./queries/UsersQueries";
