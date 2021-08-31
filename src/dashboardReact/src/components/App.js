import React from "react";
import SideBar from "./SideBar";

import { BrowserRouter as Route } from "react-router-dom";

function App() {
  return (
    <Route>
      <div id="wrapper">
        <SideBar />
        {/* <ContentWrapper /> */}
      </div>
    </Route>
  );
}

export default App;
