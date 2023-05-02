import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import DetailPage from "./pages/Detail";
import RootLayout from "./pages/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: ":id", element: <DetailPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
