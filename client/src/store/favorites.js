import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk("GET_FAVORITES", () => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.get(`/api/favorites/${userId}`);
});

export const addFavorite = createAsyncThunk("ADD_FAVORITE", (movie) => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.post(`/api/favorites/add/${userId}/${movie.id}`, {
    original_title: movie.original_title,
    poster_path: movie.poster_path,
  });
});

export const removeFavorite = createAsyncThunk("REMOVE_FAVORITE", (movie) => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  return axios.delete(`/api/favorites/${userId}/${movie.favoriteId}`);
});

const favoritesReducer = createReducer([], {
  [getFavorites.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;
