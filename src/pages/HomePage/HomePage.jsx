import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <main className={`${styles.container} ${styles.shadowFrame}`}>
      <h1 className={styles.title}>Trending Today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;