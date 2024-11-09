import { createBrowserRouter } from "react-router-dom";

import { Home} from "../componentes/Home";
import { Login} from "../componentes/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
]);