import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RootLayout from "./general/RootLayout";
import LogInPage from "./pages/LogInPage";
import ProtectedRoutes from "./authRoutes/ProtectedRoutes";
import { useEffect } from "react";
import PublicRoutes from "./authRoutes/PublicRoutes";
//import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/** Protected Routes */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<RootLayout />}>
          <Route path="/p1" element={<p>1</p>} />
        </Route>
      </Route>

      {/** Public Routes */}
      <Route path="/" element={<PublicRoutes />} >
        <Route path="/" element={<RootLayout />}>
          <Route path="/login" element={<LogInPage />} />
        </Route>
      </Route>

    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
