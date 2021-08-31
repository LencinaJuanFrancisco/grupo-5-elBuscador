import React, { Component } from "react";

import ListadoProducto from "./ListadoProducto";

class Producto extends Component {
  constructor() {
    super();
    this.state = {
      allProductos: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/productos")
      .then((response) => {
        return response.json();
      })
      .then((dato) => {
        console.log("que es esto--en Productos ----->" + dato.data);
        this.setState({
          allProductos: dato.data,
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
          <h1 className="h3 mb-2 text-gray-800">Listado de Productos</h1>
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
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>cantidad</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                  </tr>
                </tfoot>
                <tbody>
                  {this.state.allProductos.map((producto, index) => {
                    return <ListadoProducto {...producto} key={index} />;
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
export default Producto;
