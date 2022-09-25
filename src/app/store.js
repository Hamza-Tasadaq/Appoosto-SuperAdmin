import { configureStore } from "@reduxjs/toolkit";
import permissionsReducer from "./slices/PermissionsSlice";

export const store = configureStore({
  reducer: {
    permissions: permissionsReducer,
  },
});
