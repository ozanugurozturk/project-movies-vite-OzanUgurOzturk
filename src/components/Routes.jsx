import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;