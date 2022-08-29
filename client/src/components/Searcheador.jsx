import React from "react";
import { useEffect, useState } from "react";
import Search from "./Search";
import axios from "axios";
import MovieCard from "./MovieCard";
import styles from "./Search.module.css";
import { useParams } from "react-router-dom";

export default function Searcheador() {
  const [searchResults, setSearchResults] = useState([]);
  const { value } = useParams();

  useEffect(() => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=859094381e307b3a810be68bf946419d&query=${value}`;
    axios
      .get(searchUrl)
      .then((res) => res.data.results)
      .then((movies) => setSearchResults(movies))
      .catch((err) => console.log(err));
  }, [value]);

  return (
    <div>
      <Search />
      <ul className={styles.searchGrid}>
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
