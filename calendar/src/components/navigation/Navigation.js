import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Calendar
    </NavLink>

    <NavLink
      to="/authorisation"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Authorisation
    </NavLink>
  </nav>
);
