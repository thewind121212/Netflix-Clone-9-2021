import React, { useRef, useState, useEffect } from "react";
import CategoryItem from "../categoryItem/CategoryItem.component";
import UiSlider from "../UI/SliderDot.component";
import "./categoryList.styles.scss";

const CategoryList: React.FC<any> = (props) => {
  const [slideShow, setSlideShow] = useState<any>(0);
  const [touchedNextSlide, setTouchedNextSlide] = useState<any>(false);

  const changeSlideList = (direction: string) => {
    if (direction === "left") {
      slideShow === 0 ? setSlideShow(-4) : setSlideShow(slideShow - 1);
    }
    if (direction === "right") {
      setTouchedNextSlide(true);
      slideShow === -10 ? setSlideShow(0) : setSlideShow(slideShow + 1);
    }
  };

  return (
    <div className="categoryList">
      <div className="categoryList__info">
        <div className="categoryList__info--text">{props.title}</div>
        <UiSlider slide={slideShow} key={props.title} />
      </div>
      <div className="categoryList__container">
        <div
          className="categoryList--prev"
          style={{ display: `${touchedNextSlide ? "" : "none"}` }}
          onClick={() => {
            changeSlideList("left");
          }}
        >
          <i className="bx bxs-chevron-left"></i>
        </div>
        <div
          className="categoryList__list"
          style={{
            transform: `translateX(calc((100vw - 8vw + 4px)*(-${slideShow})))`,
          }}
        >
          {props.moviesData.map((movie: any) => {
            return (
              <CategoryItem key={movie.id} movieData={movie} big={movie.big} />
            );
          })}
        </div>
        <div
          className="categoryList--next"
          onClick={() => {
            changeSlideList("right");
          }}
        >
          <i className="bx bxs-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
