import React, { useState } from "react";
import axios from "../../axios/axios.api";

const CategoryItemInfo: React.FC<any> = React.forwardRef((props, ref: any) => {
  return (
    <div
      className="categoryItem__container"
      ref={ref}
      onMouseLeave={props.clearPopUpPosition}
      onMouseOver={props.onShowPopUp}
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
  );
});

export default CategoryItemInfo;
