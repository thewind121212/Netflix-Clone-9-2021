import React, { useState, useEffect } from "react";
import "./banner.styles.scss";
import axios from "../../axios/axios.api";
import movieRequest from "../../axios/request.api";

const Banner = () => {
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(movieRequest.fetchNetflixOriginals.api);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div className="banner">
      <div
        className="banner__wrapper"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="banner__info">
          <h1 className="banner__info--title">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <h1 className="banner__info--des">
            {truncate(movie?.overview, 150)}
          </h1>
          <div className="banner__button">
            <button className="banner__button--play">
              {" "}
              <i className="bx bx-play"></i>
              <h3>Phát</h3>
            </button>
            <button className="banner__button--des">
              {" "}
              <i className="bx bx-info-circle"></i>
              <h3>Thông tin khác</h3>
            </button>
          </div>
        </div>
        <div className="banner__play">
          <i className="bx bx-volume-mute"></i>
        </div>
        <div className="banner__age">18+</div>
        <div className="banner__fadeBottom"></div>
      </div>{" "}
    </div>
  );
};

export default Banner;
