import React, { useState, useEffect } from "react";
import styles from "./FavoritesDetails.module.css";
import { AiFillDelete } from "react-icons/ai";

const FavoritesDetails = ({ movie, handleRemoveFavorites }) => {
  return (
    <>
      <li className={styles.movieCard}>
        <img
          className={styles.movieImage}
          width={230}
          height={345}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.title}
        />
        <h2 className={styles.movieTitle}>{movie.original_title}</h2>
        <button type="button" className="btn btn-danger btn-sm">
          <AiFillDelete
            className={styles.button}
            onClick={() => handleRemoveFavorites(movie)}
          />
        </button>
      </li>
    </>
  );
};

export default FavoritesDetails;
