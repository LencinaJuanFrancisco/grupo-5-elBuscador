import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import GenresInDb from "./GenresInDb";
import ContentRowMovies from "./ContentRowMovies";
import LastProduct from "./LastProduct";

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">El Buscador Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <ContentRowMovies />
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <LastProduct />
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!-- Genres in DB -->*/}
          <GenresInDb />

          {/*<!--End Genres In Db-->*/}
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
