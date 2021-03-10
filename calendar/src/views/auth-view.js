import PropTypes from 'prop-types';
import Selector from '../components/selector';
export default function AuthView({ onSubmit }) {
  return <Selector onSubmit={onSubmit} multiple={false} />;
}
AuthView.propTypes = {
  onSubmit: PropTypes.func,
};
