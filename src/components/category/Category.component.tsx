import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./category.styles.scss";
import CategoryList from "../categoryList/CategoryList.component";
import { fetchMovies } from "../../redux/movieReducer/movieReducer.utils";

const Category: React.FC<any> = (props) => {
  const selector = useSelector((state: any) => state);
  const [loading, setLoading] = useState<any>(true);
  const dispatch = useDispatch();

  const moviesList = selector.movies[props.movieType];

  let rootMovies: any = [];

  useEffect(() => {
    if (moviesList.length === 0) {
      dispatch(fetchMovies(props.movieType));
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
      setLoading(false);
    }, 200);
    return () => {
      setLoading(true);
    };
  }, [dispatch, props.movieType, moviesList]);

  rootMovies = selector.movies[props.movieType];

  const movieList = rootMovies.map((movie: any) => {
    return (
      <CategoryList
        key={movie.id}
        title={movie.title}
        big={movie.big}
        moviesData={movie.movies}
      />
    );
  });

  return <div className={`category ${loading && "loading"}`}>{movieList}</div>;
};

export default Category;
