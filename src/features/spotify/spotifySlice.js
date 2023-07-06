import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  // discover_weekly: [],
  item: null,
  token: null,
};

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },

    setUserToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },

    setPlaylist: (state, action) => {
      return {
        ...state,
        playlists: action.payload,
      };
    },

    setDiscoverWeekly: (state, action) => {
      return {
        ...state,
        discover_weekly: action.payload,
      };
    },
  },
});

export const { setUser, setUserToken, setPlaylist, setDiscoverWeekly } =
  spotifySlice.actions;

export default spotifySlice.reducer;
