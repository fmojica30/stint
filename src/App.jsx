import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./general/RootLayout";
import LogInPage from "./pages/LogInPage";
import ProtectedRoutes from "./authRoutes/ProtectedRoutes";
import PublicRoutes from "./authRoutes/PublicRoutes";
import Dashboard from "./pages/Dashboard";
import React from "react";
//import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/** Protected Routes */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<RootLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      {/** Public Routes */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<p>home</p>} />
          <Route path="/login" element={<LogInPage />} />
        </Route>
      </Route>
    </>
  )
);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
