import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function Selector({
  multiple,
  onChange,
  selectArray,
  selectorName,
}) {
  const getSelectedMembers = target => {
    if (target.multiple) {
      const values = [];

      const select = target.options;
      for (let i = 0; i < select.length; i += 1) {
        if (select[i].selected) {
          values.push(Number(select[i].value));
        }
      }
      onChange(values);
      return;
    }
    onChange(Number(target.value));
  };

  return (
    <>
      <Form id={selectorName}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Select {`${selectorName}`}</Form.Label>
          <Form.Control
            className="selector"
            as="select"
            multiple={multiple}
            custom
            onChange={e => getSelectedMembers(e.target)}
          >
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