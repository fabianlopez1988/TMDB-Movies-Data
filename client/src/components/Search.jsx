import React, { useState } from "react";
import styles from "./Search.module.css";
import { useNavigate } from "react-router";

const Search = () => {
  const [searchMovies, setSearchMovies] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setSearchMovies(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchMovies}`)
  };

  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Welcome</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <form className={styles.search} role="searc h" onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          value={searchMovies}
          className={styles.input}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      </div>

    {/* <div>
        <ul className={styles.searchGrid}>
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
    
    </div> */}
    </>
  );
};

export default Search;
