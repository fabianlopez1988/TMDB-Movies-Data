import styles from "./MoviesGrid.module.css";
import MovieCard from "./MovieCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Spinner } from './Spinner'

//grilla de peliculas
const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=859094381e307b3a810be68bf946419d&language=en-US&page=1"
      ).then((data) => {   
      setMovies (data.data.results);
      setIsLoading(false)
      });
        
  }, []);
  
  if(isLoading){
    return <Spinner />
  }


  return (
    <ul className={styles.moviesGrid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}  />
      ))}
    </ul>
  );
}

export default MoviesGrid;