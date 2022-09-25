import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permissions: {},
};

export const permissionsSlice = createSlice({
  name: "Permissions",
  initialState,
  reducers: {
    // Add the Permission on first Load
    addPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    newPermission: (state, action) => {
      // action.payload;
    },
    deletePerm: (state, action) => {
      // const { id } = action.payload;
      // console.log(id);
      // // console.log(current();
      // const permList = state.permissions.responscedata.permissions;
      // const newPermList = permList.filter((permItem) => permItem.id !== id);

      // state.permissions.responscedata.permissions = newPermList;
      // const updatedPermissions = state.permissions;
      // // console.log(current(.responscedata));
      // state.permissions = updatedPermissions;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPermissions, newPermission, deletePerm } =
  permissionsSlice.actions;

export default permissionsSlice.reducer;
