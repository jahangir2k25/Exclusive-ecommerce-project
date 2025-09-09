import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import { store } from "./Store";
import AtToCart from "./pages/AtToCart";
import Account from "./pages/Account";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";
import Wishlist from "./pages/Wishlist";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
      { path: "contact", Component: Contact },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },
      { path: "productdetails/:id", Component: ProductDetails },
      { path: "attocart", Component: AtToCart },
      { path: "account", Component: Account },
      { path: "checkout", Component: CheckOut },
      { path: "error", Component: Error },
      { path: "wishlist", Component: Wishlist },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,

);
