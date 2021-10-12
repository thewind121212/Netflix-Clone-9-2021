import React, { useRef, useState } from "react";
import "./categoryItem.styles.scss";
import { useDispatch } from "react-redux";
import { previewMovieActions } from "../../redux/previewMovie/previewMovie.slice";

const defaultLocation = (window.innerWidth / 100) * 4;

const CategoryItem: React.FC<any> = (props) => {
  const [mouseDelayHandler, setMouseEventHandler] = useState<any>(null);
  const cardRef = useRef<any>(null);

  const dispatch = useDispatch();

  const getMoviePostion = () => {
    setMouseEventHandler(
      setTimeout(() => {
        const defaultWidth = cardRef.current.getBoundingClientRect();
        let left = defaultWidth.x;
        let right = null;
        if (Math.floor(defaultWidth.x) < 100) {
          left = 0;
        } else if (
          Math.floor(defaultWidth.x + defaultWidth.width + 50) >
          Math.floor(window.innerWidth - defaultLocation)
        ) {
          right = 0;
        }
        dispatch(
          previewMovieActions.getMovieData({
            top: defaultWidth.top + window.scrollY,
            left: left,
            width: defaultWidth.width,
            right: right,
            image: props.movieData.backdrop_path,
            movieId: props.id,
          })
        );
      }, 400)
    );
  };

  const clearMouseDelay = () => {
    clearTimeout(mouseDelayHandler);
  };

  return (
    <div
      className={`categoryItem   ${props.big && "big"}`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.movieData?.backdrop_path})`,
      }}
      ref={cardRef}
      onMouseOver={getMoviePostion}
      onMouseLeave={clearMouseDelay}
    ></div>
  );
};

export default CategoryItem;
