import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import styles from './container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <Navigation />
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node,
};
