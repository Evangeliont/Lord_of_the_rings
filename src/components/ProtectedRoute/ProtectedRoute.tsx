import { Navigate, Outlet } from "react-router-dom";
import { getAuthLS } from "../../utils/saveDataUser";

export const ProtectedRouteComponent = () => {
  const isAuth = getAuthLS();
  return isAuth ? <Outlet /> : <Navigate to="/signIn" replace />;
};
