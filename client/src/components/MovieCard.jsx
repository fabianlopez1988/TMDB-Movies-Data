import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  return (
    <>

    
      {movie.poster_path && (
        <li className={styles.movieCard}>
          <Link to={`/movie/${movie.id}`}>
            <img
              className={styles.movieImage}
              width={230}
              height={345}
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.title}
            />
          
          {/* <button className={styles.fav}>
          < GrFavorite />
          </button> */}
        
            <h2 className={styles.movieTitle}>{movie.title}</h2>
          </Link>
        </li>
      )}
    </>
  );
};

export default MovieCard;
