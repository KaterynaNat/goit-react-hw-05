import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;