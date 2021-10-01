const API_KEY = "0f07f9146209302905c442436188fc21";

type requestType = {
  [key: string]: any;
};

export const dataMovie: requestType = {
  defaultPage: {
    fetchTrending: {
      id: "home1",
      titleName: "Phim Thịnh Hành ",
      api: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      big: true,
    },
    fetchNetflixOriginals: {
      id: "home2",
      titleName: "Phim Chỉ có trên Netflix",
      api: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=6`,
      big: false,
    },
    fetchTopRated: {
      id: "home3",
      titleName: "Phim Đánh giá cao",
      api: `movie/top_rated?api_key=${API_KEY}&language=en-US&with_networks=213&page=6`,
      big: false,
    },
    fetchActionMovies: {
      id: "home4",
      titleName: "Phim hành động",
      api: `discover/tv?api_key=${API_KEY}&with_genres=10759&with_networks=213&page=2`,
      big: false,
    },
    fetchComedyMovies: {
      id: "home5",
      titleName: "Phim Hài",
      api: `discover/movie?api_key=${API_KEY}&with_genres=35`,
      big: false,
    },
    fetchHorrorMovies: {
      id: "home6",
      titleName: "Phim Kinh Dị",
      api: `discover/movie?api_key=${API_KEY}&with_genres=27`,
      big: false,
    },
    fetchRomanceMovies: {
      id: "home7",
      titleName: "Phim Lãng Mạn",
      api: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
      big: false,
    },
    fetchDocumentaries: {
      id: "home8",
      titleName: "Phim Tài Liệu",
      api: `discover/movie?api_key=${API_KEY}&with_genres=99`,
      big: false,
    },
  },
  tvShow: {
    fetchTrending: {
      id: "tv1",
      titleName: "Phim Thịnh Hành ",
      api: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=2`,
      big: true,
    },
    fetchNetflixOriginals: {
      id: "tv2",
      titleName: "Phim Chỉ có trên Netflix",
      api: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=3`,
      big: false,
    },
    fetchTopRated: {
      id: "tv3",
      titleName: "Phim Đánh giá cao",
      api: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
      big: false,
    },
    fetchActionMovies: {
      id: "tv4",
      titleName: "Phim hành động",
      api: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
      big: false,
    },
    fetchComedyMovies: {
      id: "tv5",
      titleName: "Phim Hài",
      api: `discover/tv?api_key=${API_KEY}&with_genres=35`,
      big: false,
    },
    fetchHorrorMovies: {
      id: "tv6",
      titleName: "Phim Tội Phạm",
      api: `discover/tv?api_key=${API_KEY}&with_genres=80`,
      big: false,
    },
    fetchRomanceMovies: {
      id: "tv7",
      titleName: "Phim Viễn Tưởng",
      api: `discover/tv?api_key=${API_KEY}&with_genres=10765`,
      big: false,
    },
    fetchDocumentaries: {
      id: "tv8",
      titleName: "Phim Tài Liệu",
      api: `discover/tv?api_key=${API_KEY}&with_genres=99`,
      big: false,
    },
  },
  movies: {
    fetchTrending: {
      id: "movie1",
      titleName: "Phim Thịnh Hành ",
      api: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=10`,
      big: true,
    },
    fetchNetflixOriginals: {
      id: "movie2",
      titleName: "Phim Chỉ có trên Netflix",
      api: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=4`,
      big: false,
    },
    fetchTopRated: {
      id: "movie3",
      titleName: "Phim Đánh giá cao",
      api: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=4`,
      big: false,
    },
    fetchActionMovies: {
      id: "movie4",
      titleName: "Phim hành động",
      api: `discover/tv?api_key=${API_KEY}&with_genres=10759&page=4`,
      big: false,
    },
    fetchComedyMovies: {
      id: "movie5",
      titleName: "Phim Hài",
      api: `discover/tv?api_key=${API_KEY}&with_genres=35&page=4`,
      big: false,
    },
    fetchHorrorMovies: {
      id: "movie6",
      titleName: "Phim Tội Phạm",
      api: `discover/tv?api_key=${API_KEY}&with_genres=80&page=4`,
      big: false,
    },
    fetchRomanceMovies: {
      id: "movie7",
      titleName: "Phim Viễn Tưởng",
      api: `discover/tv?api_key=${API_KEY}&with_genres=10765&page=4`,
      big: false,
    },
    fetchDocumentaries: {
      id: "movie8",
      titleName: "Phim Tài Liệu",
      api: `discover/tv?api_key=${API_KEY}&with_genres=99&page=4`,
      big: false,
    },
  },
};
