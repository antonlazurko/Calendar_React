import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

import { participants } from '../data/calendar-data';

import Selector from '../components/selector';
export default function AuthView({ onSubmit }) {
  const [participantId, setParticipantId] = useState('');
  const handleSelectChange = value => {
    const participant = participants.find(({ user }) => user.name === value);
    setParticipantId(participant.user.id);
  };

  const handleSubmit = () => {
    if (!participantId) {
      return;
    }
    const member = participants.find(({ user }) => {
      return user.id === participantId;
    });
    if (member.isAdmin) {
      onSubmit(true);
      return;
    } else {
      onSubmit(false);
    }
  };
  return (
    <>
      <Selector
        selectArray={participants}
        selectorName="participant"
        onChange={handleSelectChange}
        multiple={false}
      />
      <Button variant="primary" onClick={() => handleSubmit()}>
        Autorise
      </Button>
    </>
  );
}
AuthView.propTypes = {
  onSubmit: PropTypes.func,
};
