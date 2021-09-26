import React, { useRef, useState, useEffect } from "react";
import CategoryItem from "../categoryItem/CategoryItem.component";
import axios from "../../axios/axios.api";
import "./categoryList.styles.scss";

const CategoryList: React.FC<any> = (props) => {
  const [movieRow, setMoviewRow] = useState<any>([]);
  const [slideShow, setSlideShow] = useState<any>(0);
  const [touchedNextSlide, setTouchedNextSlide] = useState<any>(false);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(props.fetch);
      setMoviewRow(res.data.results);
    };
    getData();
  }, [setMoviewRow]);

  const changeSlideList = (direction: string) => {
    if (direction === "left") {
      slideShow === 0 ? setSlideShow(-4) : setSlideShow(slideShow + 1);
    }
    if (direction === "right") {
      setTouchedNextSlide(true);
      slideShow === -4 ? setSlideShow(0) : setSlideShow(slideShow - 1);
    }
  };

  return (
    <div className="categoryList">
      <div className="categoryList__info">
        <div className="categoryList__info--text">{props.title}</div>
        <div className="categoryList__info--dots">
          <div className={`dot ${slideShow === 0 && "sanglen"}`}></div>
          <div className={`dot ${slideShow === -1 && "sanglen"}`}></div>
          <div className={`dot ${slideShow === -2 && "sanglen"}`}></div>
          <div className={`dot ${slideShow === -3 && "sanglen"}`}></div>
          <div className={`dot ${slideShow === -4 && "sanglen"}`}></div>
        </div>
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
            transform: `translateX(calc((100vw - 8vw + 4px)*${slideShow}))`,
          }}
        >
          {movieRow.map((movie: any) => {
            return (
              <CategoryItem key={movie.id} movieData={movie} big={props.big} />
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
