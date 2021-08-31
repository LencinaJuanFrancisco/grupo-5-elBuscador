import React, { Component } from "react";
import Genre from "./Genre";

class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/generos")
      .then((response) => {
        return response.json();
      })
      .then((genres) => {
        console.log("que viene aca en generos------>" + genres);
        this.setState({ genresList: genres.data });
      })
      .catch((e) => console.log(e));
  }

  fondo() {
    document.querySelector(".peli").classList.toggle("bg-secondary");
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                onMouseOver={() => this.fondo()}
                className="m-0 font-weight-bold text-gray-800"
              >
                Listado de Generos
              </h6>
            </div>
            <div className="card-body peli">
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default GenresInDb;
