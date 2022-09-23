import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Layout, Loader } from "./components";

function PrivateRoutes({ children, ...rest }) {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />;
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
