import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import UploadPage from "../Pages/UploadPage";

export const AppRoutes = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/add-song", element: <UploadPage /> },
]);
