import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import RootLayout from "./pages/Root";
import CheckoutForm from "./components/CheckoutForm";
import ProductList from "./components/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:id", element: <Home /> },
      { path: "search/:name", element: <Home /> },
      { path: "products/:id", element: <ProductDetails /> },
      { path: "checkout-form", element: <CheckoutForm /> },
      { path: "checkout-products", element: <ProductList /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
