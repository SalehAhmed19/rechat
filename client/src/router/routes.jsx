import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChatHome from "../pages/ChatHome";
import Login from "../components/Authentication/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <ChatHome /> },
      { path: "/authentication/login", element: <Login /> },
    ],
  },
]);

export default routes;
