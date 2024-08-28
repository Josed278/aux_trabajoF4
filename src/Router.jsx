// Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Card from "./components/Card"; // Asegúrate de agregar todas las rutas necesarias

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/card",
    element: <Card />, // Agrega todas las rutas necesarias aquí
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);

export default router;
