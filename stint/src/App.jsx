import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import RootLayout from "./general/RootLayout";
import LogInPage from "./pages/LogInPage";
//import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<LogInPage />} />
  </Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
