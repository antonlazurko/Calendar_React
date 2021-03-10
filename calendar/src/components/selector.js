import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function Selector({
  multiple,
  onChange,
  selectArray,
  selectorName,
}) {
  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Select {`${selectorName}`}</Form.Label>
        <Form.Control
          as="select"
          multiple={multiple}
          custom
          onChange={e => onChange(e.target.value)}
        >
          {!multiple && <option></option>}
          {selectArray?.map(({ user }) => (
            <option key={user.id} id={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
Selector.propTypes = {
  onChange: PropTypes.func,
};
