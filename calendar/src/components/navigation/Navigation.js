import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/Calendar_React/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Calendar
    </NavLink>

    <NavLink
      to="/Calendar_React/authorization"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Authorisation
    </NavLink>
  </nav>
);
