import React, { useState, useContext, createContext, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOGGEDINUSERAUTH } from "../graphQl/Query";
const authContext = createContext();
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  //Handel the error message with react toastify
  const { loading, data, error } = useQuery(LOGGEDINUSERAUTH);

  return {
    user: data,
    loading,
  };
}
