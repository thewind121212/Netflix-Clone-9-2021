import React, { useState, useEffect } from "react";
import axios from "../../axios/axios.api";
import { API_KEY } from "../../axios/request.api";

const InfoBlock: React.FC<any> = (props) => {
  const [movieInfo, setMovieInfo] = useState<any>({
    adult: null,
    genres: [],
    runTime: 0,
  });

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${props.id}?api_key=${API_KEY}&language=en-US`
      );
      const { adult, genres, runtime } = res.data;
      setMovieInfo((prevState: any) => {
        return {
          adult: adult,
          genres: genres,
          runTime: runtime,
        };
      });
    };
    fetchMovieInfo();
  }, [props.id]);
  const runTime = `${Math.floor(movieInfo.runTime / 60)}h ${
    movieInfo.runTime - Math.floor(movieInfo.runTime / 60) * 60
  }phút`;
  return (
    <div>
      <div className="categoryItem__infoMovieInfo">
        <i className="categoryItem__infoMovieInfo--match">
          Độ trùng: {Math.floor(Math.random() * 20 + 80)}%
        </i>
        <i className="categoryItem__infoMovieInfo--age">
          {movieInfo.adult ? "18+" : "14+"}
        </i>
        <i className="categoryItem__infoMovieInfo--season">{runTime}</i>
        <i className="categoryItem__infoMovieInfo--hd">HD</i>
      </div>
      <div className="categoryItem__infoGene">
        {movieInfo.genres.slice(0, 3).map((genre: any) => {
          return (
            <i key={genre.id} className="categoryItem__infoGene--1">
              {genre.name}
            </i>
          );
        })}
      </div>
    </div>
  );
};

export default InfoBlock;
