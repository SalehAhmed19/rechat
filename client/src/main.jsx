import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import { Provider } from "react-redux";
import { store } from "./RTK/store/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <Toaster />
    </Provider>
  </StrictMode>
);
