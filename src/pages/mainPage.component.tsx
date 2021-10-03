import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";

import "./mainPage.styles.scss";
import { dotSliceActions } from "../redux/globalResponsive/dotSlider.slice";
import Header from "../components/header/Header.component";
import Banner from "../components/banner/Banner.component";
import Category from "../components/category/Category.component";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const resizerHandler = () => {
      if (window.innerWidth < 501) {
        dispatch(dotSliceActions.getDotQuantity(20));
      } else if (window.innerWidth > 500 && window.innerWidth < 782) {
        dispatch(dotSliceActions.getDotQuantity(14));
      } else if (window.innerWidth > 782 && window.innerWidth < 1100) {
        dispatch(dotSliceActions.getDotQuantity(10));
      } else if (window.innerWidth > 1100 && window.innerWidth < 1400) {
        dispatch(dotSliceActions.getDotQuantity(8));
      } else if (window.innerWidth > 1400) {
        dispatch(dotSliceActions.getDotQuantity(7));
      }
    };
    resizerHandler();
    window.addEventListener("resize", resizerHandler);
  }, [dispatch]);
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
