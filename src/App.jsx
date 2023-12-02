import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectRoutes from "./components/route/ProtectRoutes";
import { authRoutes, protectRoutes } from "./configs/routes";
import { useSelector } from "react-redux";
import AppRoute from "./components/route/AppRoute";
import AuthRoutes from "./components/route/AuthRoutes";
import Register from "./pages/auth/Register";
import ChackAuth from "./components/route/ChackAuth";

const App = () => {
  const { singIn } = useSelector((state) => state.session);
  const { role } = useSelector((state) => state.user);

  console.log(role);
  return (
    <Routes>
      <Route path="/" element={<ProtectRoutes isAuthenticated={singIn} />}>
        {protectRoutes.map((route) => (
          <Route
            path={route.path}
            element={
              <ChackAuth userRole={role} role={route.role}>
                <AppRoute component={route.component} />
              </ChackAuth>
            }
            key={route.key}
          />
        ))}
      </Route>
      <Route path="/" element={<AuthRoutes isAuthenticated={singIn}  />}>
        {authRoutes.map((route) => (
          <Route
            path={route.path}
            element={<AppRoute component={route.component} />}
            key={route.key}
          />
        ))}
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default App;
