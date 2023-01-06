import react from "react";

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (props) => {
  let auth = localStorage.getItem('pocketbase_auth');

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;