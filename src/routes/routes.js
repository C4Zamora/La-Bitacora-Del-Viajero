import { createBrowserRouter } from "react-router-dom";

import { Home} from "../componentes/Home";
import { Login} from "../componentes/Login";
import { Registro} from "../componentes/Registro";
import { Blog} from "../componentes/Blog";
import { Posts } from "../componentes/Posts";


export const router = createBrowserRouter([
  {
    path: "/La-Bitacora-Del-Viajero",
    Component: Home,
  },
  {
    path: "/La-Bitacora-Del-Viajero/login",
    Component: Login,
  },
  {
    path: "/La-Bitacora-Del-Viajero/registro",
    Component: Registro,
  },
  {
    path: "/La-Bitacora-Del-Viajero/blog",
    Component: Blog,
  },
  {
    path: "/La-Bitacora-Del-Viajero/Posts",
    Component: Posts,
  },
  {
    basename: "/La-Bitacora-Del-Viajero", // Cambia esto según el nombre de tu repositorio
  }

]);