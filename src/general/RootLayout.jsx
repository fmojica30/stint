import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

function RootLayout({ children }) {
  return (
    <Fragment>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
