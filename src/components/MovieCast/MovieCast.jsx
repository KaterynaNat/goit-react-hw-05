import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/tmdbApi';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(data => setCast(data.cast))
      .catch(err => console.error(err));
  }, [movieId]);

  if (cast.length === 0) {
    return <p>We do not have any cast for this movie.</p>;
  }

  return (
    <ul className={styles.castList}>
      {cast.map(({ id, name, character, profile_path }) => {
        const profileUrl = profile_path
          ? `https://image.tmdb.org/t/p/w200${profile_path}`
          : 'https://via.placeholder.com/200x300?text=No+Photo';
        return (
          <li key={id} className={styles.castItem}>
            <img src={profileUrl} alt={name} width="100" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;