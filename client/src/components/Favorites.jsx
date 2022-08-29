import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites, removeFavorite } from "../store/favorites";
import FavoritesDetails from "./FavoritesDetails";
import styles from "./Favorites.module.css"

export default function Favorites() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.favorites).data;

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const handleRemoveFavorites = (movie) => {
    dispatch(removeFavorite(movie)).then(() => dispatch(getFavorites()));
  };

  return (
    <ul className={styles.moviesGrid}>
      {movies?.map((movie) => (
        <FavoritesDetails
          key={movie.id}
          movie={movie}
          handleRemoveFavorites={handleRemoveFavorites}
        /> //el movie={movie} pasa por prop a FavoritesDetails
      ))}
    </ul>
  );
}
