import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { participants } from '../data/calendar-data';

import Selector from '../components/selector';
export default function AuthView({ onSubmit }) {
  const [participantId, setParticipantId] = useState('');
  const handleSelectChange = value => {
    setParticipantId(Number(value));
  };
  useEffect(() => {
    console.log(participantId);
  }, [participantId]);
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
