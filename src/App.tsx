import React from "react";

import { Route, Redirect } from "react-router";
import MoviePage from "./pages/mainPage.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Redirect to="/browse" />
      </Route>
      <Route path="/browse">
        <MoviePage />
      </Route>
    </div>
  );
}

export default App;
