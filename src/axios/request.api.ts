const API_KEY = "0f07f9146209302905c442436188fc21";

type requestType = {
  [key: string]: any;
};

const request: requestType = {
  fetchTrending: {
    titleName: "Phim Thịnh Hành ",
    api: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    big: true,
  },
  fetchNetflixOriginals: {
    titleName: "Phim Chỉ có trên Netflix",
    api: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    big: false,
  },
  fetchTopRated: {
    titleName: "Phim Đánh giá cao",
    api: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    big: false,
  },
  fetchActionMovies: {
    titleName: "Phim hành động",
    api: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    big: false,
  },
  fetchComedyMovies: {
    titleName: "Phim Hài",
    api: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    big: false,
  },
  fetchHorrorMovies: {
    titleName: "Phim Kinh Dị",
    api: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    big: false,
  },
  fetchRomanceMovies: {
    titleName: "Phim Lãng Mạn",
    api: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    big: false,
  },
  fetchDocumentaries: {
    titleName: "Phim Tài Liệu",
    api: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    big: false,
  },
};

export default request;
