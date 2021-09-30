import React, { useRef } from "react";
import "./categoryItem.styles.scss";

const defaultLocation = (window.innerWidth / 100) * 4;

const CategoryItem: React.FC<any> = (props) => {
  const popUpRef = useRef<any>(null);
  const cardRef = useRef<any>(null);

  const showPopUp = () => {
    const defaultWidth = cardRef.current.getBoundingClientRect();
    popUpRef.current.classList.remove("left");
    popUpRef.current.classList.remove("right");
    if (Math.floor(defaultWidth.x) < 100) {
      popUpRef.current.classList.add("left");
    } else if (
      Math.floor(defaultWidth.x + defaultWidth.width + 10) >
      Math.floor(window.innerWidth - defaultLocation)
    ) {
      popUpRef.current.classList.add("right");
    }
  };

  return (
    <div
      className={`categoryItem   ${props.big && "big"}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieData?.backdrop_path})`,
      }}
      ref={cardRef}
      onMouseOver={showPopUp}
    >
      <div className="categoryItem__container" ref={popUpRef}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.movieData?.backdrop_path}`}
          className="categoryItem__container--img"
          alt=""
        />
        <div className="categoryItem__infoButton">
          <div className="categoryItem__infoButton--left">
            <i className="bx bx-play categoryItem__infoButton--play"></i>
            <i className="bx bx-plus categoryItem__infoButton--plus"></i>
            <i className="bx bx-like categoryItem__infoButton--like"></i>
            <i className="bx bx-dislike categoryItem__infoButton--dislike"></i>
          </div>
          <div className="categoryItem__infoButton-right">
            <i className="bx bx-chevron-down categoryItem__infoButton--down"></i>
          </div>
        </div>
        <div className="categoryItem__infoMovieInfo">
          <i className="categoryItem__infoMovieInfo--match">
            Độ trùng: {Math.floor(Math.random() * 20 + 80)}%
          </i>
          <i className="categoryItem__infoMovieInfo--age">18+</i>
          <i className="categoryItem__infoMovieInfo--season">1 mùa</i>
          <i className="categoryItem__infoMovieInfo--hd">HD</i>
        </div>
        <div className="categoryItem__infoGene">
          <i className="categoryItem__infoGene--1">Hành Động</i>
          <i className="categoryItem__infoGene--2">Tâm Lý</i>
          <i className="categoryItem__infoGene--3">Giật Gân</i>
        </div>
      </div>
      {/* <div
        className={`categoryItem__info none ${props.big && "neverShow"}`}
        ref={popUpRef}
        onMouseOut={removePopUp}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${props.movieData?.backdrop_path}`}
          className="categoryItem__info--img"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default CategoryItem;
