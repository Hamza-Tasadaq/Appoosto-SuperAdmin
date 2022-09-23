import { useContext, createContext } from "react";
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
  //Handle the error message with react toastify
  const { loading, data } = useQuery(LOGGEDINUSERAUTH);

  return {
    user: data,
    loading,
  };
}
