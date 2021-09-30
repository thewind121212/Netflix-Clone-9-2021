import React from "react";
import { Route, Switch } from "react-router-dom";

import "./mainPage.styles.scss";
import Header from "../components/header/Header.component";
import Banner from "../components/banner/Banner.component";
import Category from "../components/category/Category.component";
import { requestMain, tvShow } from "../axios/request.api";

const homePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Route path="/browse">
        <Category request={requestMain} />
      </Route>
    </div>
  );
};

export default homePage;
