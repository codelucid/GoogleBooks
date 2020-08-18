import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/search"}>
            <Search />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;