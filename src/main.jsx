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
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { Provider } from "react-redux";
import { store } from "./Store";


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
      { path: "/productdetailspage/:id", Component: ProductDetailsPage },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,

);
