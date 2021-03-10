import PropTypes from 'prop-types';
import Selector from '../components/selector';
export default function MainView({ isAdmin }) {
  return <div>{`${isAdmin}`}</div>;
}
MainView.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
