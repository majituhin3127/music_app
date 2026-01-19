import { createSlice } from "@reduxjs/toolkit";

const savedSongs = JSON.parse(localStorage.getItem("songs")) || [];

const musicSlice = createSlice({
  name: "music",
  initialState: {
    songs: savedSongs,
    currentIndex: null,
    view: "grid",
    editingIndex: null,
  },
  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
      localStorage.setItem("songs", JSON.stringify(state.songs));
    },

    deleteSong: (state, action) => {
      state.songs.splice(action.payload, 1);
      state.currentIndex = null;
      localStorage.setItem("songs", JSON.stringify(state.songs));
    },

    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },

    setView: (state, action) => {
      state.view = action.payload;
    },

    setEditingIndex: (state, action) => {
      state.editingIndex = action.payload;
    },

    updateSong: (state, action) => {
      const { index, title, image, audio } = action.payload;
      state.songs[index] = { ...state.songs[index], title, image, audio };
      state.editingIndex = null;
      localStorage.setItem("songs", JSON.stringify(state.songs));
    },
  },
});

export const {
  addSong,
  deleteSong,
  setCurrentIndex,
  setView,
  setEditingIndex,
  updateSong,
} = musicSlice.actions;

export default musicSlice.reducer;
