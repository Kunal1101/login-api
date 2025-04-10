import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ResetPassword from "./ResetPassword.jsx";
import Login from "./Login.jsx";
import EditUsername from "./ResetUsername.jsx";
import ResetUsername from "./ResetUsername.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Login />} />
      <Route path="forgot-password" element={<ResetPassword />} />
      <Route path="reset-username" element={<ResetUsername />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
