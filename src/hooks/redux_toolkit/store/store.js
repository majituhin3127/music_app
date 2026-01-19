import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../slice/musicSlice";

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
