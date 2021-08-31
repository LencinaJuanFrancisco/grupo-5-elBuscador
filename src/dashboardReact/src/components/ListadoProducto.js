import React from "react";

function ListadoProducto(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.precio}</td>
      <td>{props.cantidad}</td>
    </tr>
  );
}
export default ListadoProducto;
