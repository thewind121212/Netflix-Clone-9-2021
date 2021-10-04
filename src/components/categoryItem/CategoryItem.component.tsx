import React, { useRef } from "react";
import "./categoryItem.styles.scss";
import CategoryItemInfo from "./CategoryItemInfo.component";

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
      Math.floor(defaultWidth.x + defaultWidth.width + 50) >
      Math.floor(window.innerWidth - defaultLocation)
    ) {
      popUpRef.current.classList.add("right");
    }
  };

  const clearPopUpPosition = () => {
    popUpRef.current.classList.remove("left");
    popUpRef.current.classList.remove("right");
  };

  return (
    <div
      className={`categoryItem   ${props.big && "big"}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.movieData?.backdrop_path})`,
      }}
      ref={cardRef}
    >
      <CategoryItemInfo
        id={props.id}
        ref={popUpRef}
        imageDisplay={props.movieData?.backdrop_path}
        onClearPopUpPositon={clearPopUpPosition}
        onShowPopUp={showPopUp}
      />
    </div>
  );
};

export default CategoryItem;
