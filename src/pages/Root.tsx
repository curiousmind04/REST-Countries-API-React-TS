import { Outlet } from "react-router-dom";
import { useState } from "react";

import classes from "./Root.module.css";

const RootLayout = () => {
  const [theme, setTheme] = useState<string>("light");

  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      // document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      // document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  };

  return (
    <div data-theme={theme} className="app">
      <header className={classes.header}>
        <h1>Where in the world?</h1>
        <div className={classes.theme} onClick={themeHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
          <span>Dark Mode</span>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
