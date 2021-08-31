import React from "react";
//import image from "../assets/images/icono-web.png";

import ContentWrapper from "./ContentWrapper";
import LastProduct from "./LastProduct";
import GenresInDb from "./GenresInDb";
import Producto from "./Producto";
import LastUser from "./LastUser";
import Usuario from "./Usuario";
import Error404 from "./Error404";

import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-25" src={image} alt="Digital House" />
          </div>
        </a>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Producto">
            <i className="fas fa-fw fa-list-ol"></i>
            <span>Todos los Productos</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/GenresInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span>Categorias</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProduct">
            <i className="fas fa-fw fa-tshirt"></i>
            <span>Ultimo Producto</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/LastUser">
            <i className="fas fa-fw fa-user"></i>
            <span>Ultimo Usuario</span>
          </Link>
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item">
          <Link className="nav-link" to="/Usuario">
            <i className="fas fa-fw fa-users"></i>
            <span>Listado de Usuarios</span>
          </Link>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>

        <Route path="/Producto">
          <Producto />
        </Route>

        <Route path="/GenresInDb">
          <GenresInDb />
        </Route>

        <Route path="/LastProduct">
          <LastProduct />
        </Route>

        <Route path="/LastUser">
          <LastUser />
        </Route>

        <Route path="/Usuario">
          <Usuario />
        </Route>

        <Route component={Error404} />
      </Switch>
      {/*<!-- End of Sidebar -->*/}
    </React.Fragment>
  );
}
export default SideBar;
