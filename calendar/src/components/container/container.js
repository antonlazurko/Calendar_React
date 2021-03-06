import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Navigation } from 'components';
import styles from './container.module.css';
import { selectors } from 'redux/index';

export const Container = ({ children }) => {
  const loading = useSelector(selectors.getIsLoading);
  return (
    <div className={styles.container}>
      {loading && <div>Downloading...</div>}
      <Navigation />
      {children}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};
