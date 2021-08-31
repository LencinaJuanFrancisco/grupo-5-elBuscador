import React, { useState, useEffect } from "react";

function LastUser() {
  const [usuarios, setUsuario] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch("http://localhost:3000/api/usuarios");

    const usuarios = await data.json();
    console.log("USUARIO" + usuarios);
    setUsuario(usuarios.data);
    // console.log(products.data);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            {usuarios.length > 0 ? (
              <div className="card">
                <img
                  className="card-img-top"
                  src={usuarios[usuarios.length - 1].avatar}
                />
                <div className="card-body">
                  <p className="card-text">
                    {usuarios[usuarios.length - 1].nombre}
                  </p>
                </div>
              </div>
            ) : (
              "Cargando API..."
            )}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default LastUser;
