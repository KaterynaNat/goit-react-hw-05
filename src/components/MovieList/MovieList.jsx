import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p className={styles.noMovies}>No movies found.</p>;
  }

  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;