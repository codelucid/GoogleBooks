import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Bookshelf from "./pages/bookshelf";
import Search from "./pages/search";
import Navbar from "./components/Navbar/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Search} />
      <Route exact path="/bookshelf" component={Bookshelf} />
      <Route exact path="/search" component={Search} />

    </div>
  </Router>
);

export default App;