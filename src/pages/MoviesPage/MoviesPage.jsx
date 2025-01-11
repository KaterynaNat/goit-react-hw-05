import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(currentQuery);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearchParams({ query });
  };

  return (
    <main className={`${styles.container} ${styles.shadowFrame}`}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      <MovieList movies={movies} />
    </main>
  );
};

export default MoviesPage;