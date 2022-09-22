import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Layout, ToastWrapper } from "./components";

import SmallScreen from "./pages/SmallScreen";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Resturants from "./pages/Resturants";
import Plans from "./pages/Plans";
import Subscriptions from "./pages/Subscriptions";
import Translations from "./pages/Translations";

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
            <Route path="/" element={<LogIn />} />
            {/* Private/Protected Routes */}
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} exact />
              <Route path="/admin" element={<Admin />} exact />
              <Route path="/restaurants" element={<Resturants />} exact />
              <Route path="/plans" element={<Plans />} exact />
              <Route path="/subscriptions" element={<Subscriptions />} exact />
              <Route path="/translations" element={<Translations />} exact />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

const PrivateRoutes = () => {
  let auth = localStorage.getItem("isAuthenticated");
  return !auth ? (
    <Navigate to="/" />
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};
