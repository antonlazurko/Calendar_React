import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { participants } from '../../data/calendar-data';
import { Selector } from '../../components/';
import { eventActions } from '../../redux/';

export default function AuthView() {
  const [participantId, setParticipantId] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (participantId === 0) {
      toast.error('Please autorise!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const participantObj = participants.find(({ user }) => {
      return user.id === participantId;
    });

    // setting current authorized user to state
    dispatch(eventActions.authorizeAction(participantObj));

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
