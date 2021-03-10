import PropTypes from 'prop-types';
import Selector from '../components/selector';
export default function AuthView({ onSubmit }) {
  return <Selector onSubmit={onSubmit} />;
}
AuthView.propTypes = {
  children: PropTypes.node,
};
