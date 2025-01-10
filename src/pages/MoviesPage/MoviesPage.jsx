import { useState } from 'react';
import { searchMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
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