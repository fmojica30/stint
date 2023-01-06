import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("pocketbase_auth");
  return user ? true : false;
};
const PublicRoutes = () => {
  let auth = useAuth();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoutes;
