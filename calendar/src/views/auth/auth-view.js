import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { participants } from '../../data/calendar-data';
import { userContext } from '../../userContext';
import Selector from '../../components/selector/selector';

export default function AuthView() {
  const [participantId, setParticipantId] = useState(0);
  const history = useHistory();
  const { getUser } = useContext(userContext);

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

    // geting curren authorized user
    getUser(member);

    //redirecting to Main View
    history.push('/');
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
