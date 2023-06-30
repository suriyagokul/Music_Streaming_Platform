import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
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
  },
});

export const { setUser, setUserToken, setPlaylist } = spotifySlice.actions;

export default spotifySlice.reducer;
