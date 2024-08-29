// function Menu() {
//   return (
//     <div>
//       <ul className="nav">
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">
//             Inicio
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Lista Proyectos
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Crear Proyecto
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Crear Tarea
//           </a>
//         </li>
//         <li className="nav-item ms-auto">
//           <a className="nav-link active" aria-current="page" href="#">
//             Iniciar Sesión
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Menu;

// Menu.jsx
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link " aria-disabled="true" to="/Imagen">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/card">
            Lista Proyectos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/NewProyectos">
            Crear Proyecto
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/NewCard">
            Crear Tarea
          </Link>
        </li>
        <li className="nav-item ms-auto">
          <Link className="nav-link active" aria-current="page" to="/login">
            Iniciar Sesión
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
