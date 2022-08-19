import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import postsReducer from './components/Posts/postsSlice';
import Posts from "./components/Posts/Posts";

export const store = configureStore({
      reducer: {
            posts: postsReducer,
      }
});

