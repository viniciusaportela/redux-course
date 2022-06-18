import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./slices/postSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
  },
});
