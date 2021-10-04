import React, { useState } from "react";
import InfoBlock from "./InfoBlock.component";

const CategoryItemInfo: React.FC<any> = React.forwardRef((props, ref: any) => {
  const [show, setShow] = useState<any>(false);
  const showMovieInfo = () => {
    setShow(true);
  };
  return (
    <div
      className="categoryItem__container"
      ref={ref}
      onMouseLeave={props.clearPopUpPosition}
      onMouseOver={props.onShowPopUp}
      onMouseEnter={showMovieInfo}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.imageDisplay}`}
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
      {show && <InfoBlock id={props.id} />}
    </div>
  );
});

export default CategoryItemInfo;
