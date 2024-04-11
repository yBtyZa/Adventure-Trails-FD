import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Trilhas from "../pages/Trilhas.jsx";
import CadastroTrilhas from "../pages/CadastroTrilhas.jsx";
import PaginaErro from "../pages/PaginaErro.jsx";

export const routers = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  errorElement: <PaginaErro />,
  children: [
   {
    path: "/",
    element: <Home />
   },
   {
    path: "/trilhas",
    element: <Trilhas />
   },
   {
    path: "/cadastro-trilhas",
    element: <CadastroTrilhas />
   }
  ]
 }
]);