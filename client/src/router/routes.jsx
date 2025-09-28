import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChatHome from "../pages/ChatHome";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <ChatHome /> }],
  },
]);

export default routes;
