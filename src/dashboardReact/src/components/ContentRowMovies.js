import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowTop() {
  const [producto, setProducto] = useState([]);
  const datos = async () => {
    const dato = await fetch("http://localhost:3000/api/productos");
    const totales = await dato.json();
    setProducto(totales);
  };

  useEffect(() => {
    datos();
  }, []);

  let productInDataBase = {
    color: "primary",
    titulo: "Total de productos",
    valor: producto.total,
    icono: "fas fa-shopping-bag",
  };

  let amount = {
    color: "success",
    titulo: "Verano",
    valor: producto.totalVerano,
    icono: "fas fa-sun",
  };

  let user = {
    color: "warning",
    titulo: "Invierno",
    valor: producto.totalInvierno,
    icono: "fas fa-snowflake",
  };

  let cardProps = [productInDataBase, amount, user];

  return (
    <React.Fragment>
      {/*<!-- Content Row -->*/}
      <div className="row">
        {cardProps.map((producto, index) => {
          return <SmallCard {...producto} key={index} />;
        })}
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
