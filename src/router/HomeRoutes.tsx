import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/page404";
import { Setting } from "../components/pages/Setting";
import { UserManegement } from "../components/pages/UserManegement";

export const homeRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/UserManegement",
    element: <UserManegement />
  },
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/setting",
    element: <Setting />
  },
  {
    path: "*",
    element: <Page404 />
  },
];
