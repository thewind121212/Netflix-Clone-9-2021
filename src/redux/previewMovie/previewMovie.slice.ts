import { createSlice } from "@reduxjs/toolkit";

interface previewMovieType {
  isRender: boolean;
  movieInfo: any;
}

const initialState: previewMovieType = {
  isRender: false,
  movieInfo: { top: 0, left: 0, image: null, id: null },
};

export const previewMovieSlice = createSlice({
  name: "previewMovie",
  initialState,
  reducers: {
    getMovieData: (state, action: any) => {
      state.movieInfo = action.payload;
      state.isRender = true;
    },
    notShowPreview: (state) => {
      state.isRender = false;
    },
  },
});

export const previewMovieActions = previewMovieSlice.actions;
