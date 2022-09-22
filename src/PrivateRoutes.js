import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Layout } from "./components";

function PrivateRoutes({ children, ...rest }) {
  const auth = useAuth();

  if (auth.loading) {
    //You can use here your custom loading component to make it more interactive
    return <div>loading</div>;
  }

  return (
    <>
      {auth?.user?.veiwer && !auth.loading ? (
        <>
          <Layout>
            <Outlet />
          </Layout>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default PrivateRoutes;
