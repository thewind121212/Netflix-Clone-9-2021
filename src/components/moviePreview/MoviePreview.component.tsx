import { useState, useEffect, useRef } from "react";
import "./moviePreview.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { previewMovieActions } from "../../redux/previewMovie/previewMovie.slice";
import InfoPreview from "./InfoPreview.component";

const MovieItem = () => {
  const [movieData, setMovieData] = useState<any>({
    top: 0,
    left: 0,
  });
  const [mouseDelay, setMouseDelay] = useState<any>(null);
  const smallPopUp = useRef<any>(null);
  const previewMovieData = useSelector((state: any) => state.previewMovie);
  const dispatch = useDispatch();

  useEffect(() => {
    smallPopUp.current?.classList.remove("side");
    let left: any = previewMovieData.movieInfo.left;

    if (previewMovieData.movieInfo.left === 0) {
      smallPopUp.current?.classList.add("side");
      left = "4vw";
    }
    if (previewMovieData.movieInfo.right === 0) {
      smallPopUp.current?.classList.add("side");
    }
    setMovieData((prevState: any) => {
      return {
        ...prevState,
        top: previewMovieData.movieInfo.top,
        left: left,
        right: previewMovieData.movieInfo.right === 0 ? "4wv" : null,
        image: previewMovieData.movieInfo.image,
        display: false,
      };
    });
    setMouseDelay(
      setTimeout(() => {
        setMovieData((prevState: any) => {
          return {
            ...prevState,
            display: true,
          };
        });
      }, 100)
    );
  }, [previewMovieData]);

  const removePopup = () => {
    clearTimeout(mouseDelay);
    setMouseDelay(
      setTimeout(() => {
        dispatch(previewMovieActions.notShowPreview());
      }, 400)
    );
  };

  return (
    <>
      {previewMovieData.isRender && (
        <div className="moviePreview__backdrop">
          <div
            className="moviePreview__container"
            style={{
              top: movieData.top,
              left: !movieData.right && movieData.left,
              display: movieData.display ? "block" : "none",
              right: "calc(4vw )",
            }}
            onMouseLeave={removePopup}
            ref={smallPopUp}
          >
            <div className="moviePreview__imageContainer">
              <div className="moviePreview__imageWrapper">
                <img
                  className="moviePreview__imageWrapper--img"
                  src={`https://image.tmdb.org/t/p/w500/${movieData.image}`}
                  alt=""
                />
              </div>
            </div>
            <div className="moviePreview__container--info">
              <InfoPreview id={previewMovieData.movieInfo.movieId} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieItem;
