import React, { Component } from "react";

import ListadoUsuario from "./ListadoUsuario";

class Usuario extends Component {
  constructor() {
    super();
    this.state = {
      allUsuarios: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/usuarios")
      .then((response) => {
        return response.json();
      })
      .then((dato) => {
        console.log("que es esto--en Productos ----->" + dato.data);
        this.setState({
          allUsuarios: dato.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
          <h1 className="h3 mb-2 text-gray-800">Listado de usuarios</h1>

            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Email</th>
                  </tr>
                </tfoot>
                <tbody>
                  {this.state.allUsuarios.map((usuario, index) => {
                    return <ListadoUsuario {...usuario} key={index} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Usuario;
