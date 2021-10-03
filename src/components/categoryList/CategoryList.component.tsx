import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../categoryItem/CategoryItem.component";
import UiSlider from "../UI/SliderDot.component";
import "./categoryList.styles.scss";

const CategoryList: React.FC<any> = (props) => {
  const [slideShow, setSlideShow] = useState<any>(0);
  const [touchedNextSlide, setTouchedNextSlide] = useState<any>(false);

  const selector = useSelector((state: any) => state.dot.dotQuantity);

  useEffect(() => {
    setSlideShow(0);
  }, [selector]);

  const changeSlideList = (direction: string) => {
    if (direction === "left") {
      setSlideShow(slideShow - 1);
      if (Math.ceil(slideShow) === 0) {
        setSlideShow(selector - 1);
      }
      if (Math.ceil(slideShow) === 0 && selector === 7) {
        setSlideShow(5 + (1 / 6) * 4);
      } else if (Math.ceil(slideShow) === 0 && selector === 14) {
        setSlideShow(12 + 1 / 3);
      }
    }
    if (direction === "right") {
      setSlideShow(slideShow + 1);
      setTouchedNextSlide(true);
      if (Math.ceil(slideShow) === selector - 1) {
        setSlideShow(0);
      }
      if (selector === 7 && slideShow === 5) {
        setSlideShow(5 + (1 / 6) * 4);
      } else if (selector === 14 && slideShow === 12) {
        setSlideShow(12 + 1 / 3);
      }
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
              <CategoryItem
                key={movie.id}
                id={movie.id}
                movieData={movie}
                big={movie.big}
              />
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
