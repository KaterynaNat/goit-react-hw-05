import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    return (
      <nav className={styles.nav}>
        <div className={styles.shadowFrame}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Home
          </NavLink>
          {'  '}
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.activeLink}` : styles.link
            }
          >
            Movies
          </NavLink>
        </div>
      </nav>
    );
  };
  
  export default Navigation;