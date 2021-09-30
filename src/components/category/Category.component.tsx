import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./category.styles.scss";
import CategoryList from "../categoryList/CategoryList.component";
import { fetchMovies } from "../../redux/movieReducer/homeMoive.slice";
import { title } from "process";

const Category: React.FC<any> = (props) => {
  const [state, setState] = useState<any>(false);
  const arrayOfMoviesData = Object.keys(props.request).map((key: any) => {
    return { id: key, data: props.request[key] };
  });
  const selector = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const { movies, uiLoading } = selector;

  useEffect(() => {
    dispatch(fetchMovies());
    setState(true);
  }, []);

  const movieList = movies.map((movie: any) => {
    return (
      <CategoryList
        key={movie.title}
        title={movie.title}
        big={movie.big}
        moviesData={movie.movies}
      />
    );
  });

  return <div className="category">{uiLoading ? <div></div> : movieList}</div>;
};

export default Category;
