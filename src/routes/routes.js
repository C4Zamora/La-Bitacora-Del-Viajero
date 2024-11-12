import { createBrowserRouter } from "react-router-dom";

import { Home} from "../componentes/Home";
import { Login} from "../componentes/Login";
import { Registro} from "../componentes/Registro";
import { Blog} from "../componentes/Blog";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/registro",
    Component: Registro,
  },
  {
    path: "/blog",
    Component: Blog,
  },

]);