import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {
  fetchMovieDetails
} from '../../services/tmdbApi';

import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/movies');
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const { title, poster_path, overview, genres } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <main className={`${styles.container} ${styles.shadowFrame}`}>
  <button onClick={handleGoBack} className={styles.backButton}>
    Go back
  </button>
  <div className={styles.detailsWrapper}>
        <img src={posterUrl} alt={title} className={styles.poster} />
        <div className={styles.info}>
          <h2>{title}</h2>
          <p>{overview}</p>
          {genres && <p>Genres: {genres.map(g => g.name).join(', ')}</p>}

          <h3 className={styles.additionalTitle}>Additional information</h3>
          <ul className={styles.additionalList}>
            <li className={styles.additionalItem}>
              <Link to="cast" state={{ from: location?.state?.from }}>
                Cast
              </Link>
            </li>
            <li className={styles.additionalItem}>
              <Link to="reviews" state={{ from: location?.state?.from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </main>
  );
};

export default MovieDetailsPage;