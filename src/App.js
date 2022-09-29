import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastWrapper } from "./components";
import SmallScreen from "./pages/SmallScreen";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Resturants from "./pages/Resturants";
import Plans from "./pages/Plans";
import Subscriptions from "./pages/Subscriptions";
import Translations from "./pages/Translations";
import Profile from "./pages/Profile";
import useAuth from "./hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";
import { Layout, Loader } from "./components";

import "./App.css";

function App() {
  return (
    <div className="font-Poppins">
      <SmallScreen />
      <div className="hidden md:block">
        <ToastWrapper />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<LogIn />} exact />
            {/* Private/Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} exact />
              <Route path="/restaurants" element={<Resturants />} exact />
              <Route path="/plans" element={<Plans />} exact />
              <Route path="/subscriptions" element={<Subscriptions />} exact />
              <Route path="/translations" element={<Translations />} exact />
              <Route path="/profile" element={<Profile />} exact />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

function PrivateRoutes({ children, ...rest }) {
  const { loading, data } = useAuth();
  const auth = data?.veiwer;
  console.log(auth)
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {auth ? (
        <>
          <Layout>
            <Outlet />
          </Layout>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
