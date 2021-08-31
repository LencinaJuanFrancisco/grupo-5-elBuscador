import React from "react";

function ListadoUsuario(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.email}</td>
    </tr>
  );
}
export default ListadoUsuario;
