import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import { participants } from '../data/calendar-data';

export default function Selector({ onSubmit, multiple }) {
  const [name, setName] = useState('');
  const changeSelect = value => {
    setName(value);
  };
  const handleSubmit = () => {
    if (!name) {
      return;
    }
    const member = participants.find(({ user }) => {
      return user.name === name;
    });

    if (member.isAdmin) {
      onSubmit(true);
      return;
    } else {
      onSubmit(false);
    }
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label>Select participant</Form.Label>
        <Form.Control
          as="select"
          multiple={multiple}
          custom
          onChange={e => changeSelect(e.target.value)}
        >
          <option></option>
          {participants.map(({ user }) => (
            <option key={user.id}>{user.name}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={() => handleSubmit()}>
        Autorise
      </Button>
    </Form>
  );
}
Selector.propTypes = {
  onSubmit: PropTypes.func,
};
