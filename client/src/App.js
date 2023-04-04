import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";


import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import Updatepage from "./pages/Updatepage";


function App() {
  return (
    <div className="App">
      <Fragment>
          <BrowserRouter>
              <Switch>
                  <Route exact path = "/" component ={ReadPage}/>
                  <Route exact path = "/create" component ={CreatePage}/>
                  <Route exact path = "/update" component ={Updatepage}/>
              </Switch>
          </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;

