import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";

import "./mainPage.styles.scss";
import Header from "../components/header/Header.component";
import Banner from "../components/banner/Banner.component";
import Category from "../components/category/Category.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Switch>
        <Route path="/browse" exact>
          <Category movieType={"defaultPage"} key={"defaultPage"} />
        </Route>
        <Route path="/browse/tvshow">
          <Category movieType={"tvShow"} key={"tvshow"} />
        </Route>
        <Route path="/browse/movie">
          <Category movieType={"movies"} key={"movies"} />
        </Route>
      </Switch>
    </div>
  );
};

export default HomePage;
