import React, { useEffect, useState } from "react";
import "./category.styles.scss";
import CategoryList from "../categoryList/CategoryList.component";
import request from "../../axios/request.api";

const Category = () => {
  const arrayOfMoviesData = Object.keys(request).map((key: any) => {
    return { id: key, data: request[key] };
  });
  console.log(arrayOfMoviesData);
  return (
    <div className="category">
      {arrayOfMoviesData.map((movie: any) => {
        return (
          <CategoryList
            key={movie.id}
            title={movie.data.titleName}
            big={movie.data.big}
            fetch={movie.data.api}
          />
        );
      })}
    </div>
  );
};

export default Category;
