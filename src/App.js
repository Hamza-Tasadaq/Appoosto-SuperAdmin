import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import SmallScreen from "./pages/SmallScreen";
import LogIn from "./pages/LogIn";

import "./App.css";

function App() {
  return (
    <div>
      <SmallScreen />
      <div className="hidden md:block">
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LogIn />} />
            {/* Private/Protected Routes */}
            <Route element={<PrivateRoutes />}>
              {/* <Route path="/overview" element={<Overview />} exact /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

const PrivateRoutes = () => {
  let auth = false;
  return !auth ? <Navigate to="/" /> : <Outlet />;
};
