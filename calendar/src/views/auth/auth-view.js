import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { participants } from '../../data/calendar-data';

import Selector from '../../components/selector/selector';

export default function AuthView({ onSubmit }) {
  const [participantId, setParticipantId] = useState(0);

  const handleSubmit = () => {
    if (participantId === 0) {
      toast.error('Please autorise!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const member = participants.find(({ user }) => {
      return user.id === participantId;
    });
    onSubmit(member);
  };

  return (
    <>
      <Selector
        selectArray={participants}
        selectorName="participant"
        onChange={value => setParticipantId(Number(value))}
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
