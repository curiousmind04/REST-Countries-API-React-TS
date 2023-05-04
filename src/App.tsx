import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Country } from "myTypes";

import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import RootLayout from "./pages/Root";

function App() {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        console.log("error");
        return;
      }
      const data = await response.json();
      setCountries(data);
    };
    sendRequest();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage countries={countries} /> },
        {
          path: "/:id",
          element: <DetailPage countries={countries} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
