import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Navigation from '../navigation/Navigation';
import styles from './container.module.css';
import { getIsLoading } from '../../redux/selectors/selectors';

export default function Container({ children }) {
  const loading = useSelector(getIsLoading);
  return (
    <div className={styles.container}>
      {loading && <div>Downloading...</div>}
      <Navigation />
      {children}
    </div>
  );
}
Container.propTypes = {
  children: PropTypes.node,
};
