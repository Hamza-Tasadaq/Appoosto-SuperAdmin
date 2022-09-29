import { useQuery } from "@apollo/client";
import { LOGGED_IN_USER } from "../graphQl";

const useAuth = () => {
  const { loading, data } = useQuery(LOGGED_IN_USER);
  return { loading, data };
};

export default useAuth;
