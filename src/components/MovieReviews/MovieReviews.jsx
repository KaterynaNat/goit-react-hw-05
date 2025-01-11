import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/tmdbApi';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(err => console.error(err));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={styles.noReviewsMessage}>We do not have any reviews for this movie.</p>;
  }

  return (
    <ul className={styles.reviewsList}>
      {reviews.map(review => (
        <li key={review.id} className={styles.reviewItem}>
          <h3 className={styles.reviewAuthor}>Author: {review.author}</h3>
          <p className={styles.reviewContent}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;