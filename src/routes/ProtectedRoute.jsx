import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || token === "undefined") {
    return <Navigate to={"/login"} />;
  }

  return <div> {children || <Outlet />} </div>;
};

export default ProtectedRoute;
