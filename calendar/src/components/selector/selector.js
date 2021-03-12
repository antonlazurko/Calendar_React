import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Selector({
  multiple,
  onChange,
  selectArray,
  selectorName,
}) {
  return (
    <>
      <Form id={selectorName}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select {`${selectorName}`}</Form.Label>
          <Form.Control
            as="select"
            custom
            onChange={e => onChange(e.target.value)}
          >
            {!multiple && <option></option>}
            {selectArray?.map(item => (
              <option
                key={item.user?.id || item.id}
                value={item.user?.id || item.id}
              >
                {item.user?.name || item.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
Selector.propTypes = {
  multiple: propTypes.bool,
  onChange: PropTypes.func,
  selectArray: PropTypes.arrayOf(PropTypes.object),
  selectorName: propTypes.string,
};
