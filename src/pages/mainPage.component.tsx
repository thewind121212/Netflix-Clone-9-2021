import React from "react";

import "./mainPage.styles.scss";
import Header from "../components/header/Header.component";
import Banner from "../components/banner/Banner.component";
import Category from "../components/category/Category.component";

const homePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Category />
    </div>
  );
};

export default homePage;
