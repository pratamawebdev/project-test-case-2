import { Navigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";

import "./App.css";
import DataPage from "./pages/data";

const token = localStorage.getItem("token");

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/data",
    element: (
      <ProtectedRoute>
        <DataPage />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: token ? <Navigate to="/" /> : <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;
