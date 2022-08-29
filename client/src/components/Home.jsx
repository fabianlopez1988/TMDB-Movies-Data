// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import MoviesGrid from "./MoviesGrid";
// import Navbar from "./Navbar";
// import Search from "./Search";

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=859094381e307b3a810be68bf946419d&language=en-US&page=1"
//       )
//       .then((res) => res.data.results)
//       .then((movies) => setMovies(movies))
//       .catch((err) => console.log(err));
//   }, [movies]);

//   return (
//     <div>
//       <Navbar />
//       <Search />
//       <MoviesGrid movies={movies} />
//     </div>
//   );
// };

// export default Home;
