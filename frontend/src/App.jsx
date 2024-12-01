import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:id", element: <Home /> },
      { path: "search/:name", element: <Home /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
