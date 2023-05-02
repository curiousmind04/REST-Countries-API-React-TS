import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";

const RootLayout = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Where in the world?</h1>
        <div>
          <span>Dark Mode</span>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
