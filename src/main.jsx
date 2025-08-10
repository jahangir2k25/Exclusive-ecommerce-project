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
    ],
  },
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />,
    </StrictMode>,
);
