import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { participants } from '../../data/calendar-data';
import Selector from '../../components/selector/selector';
import { authorizeAction } from '../../redux/actions/actions';
import { getEventOperation } from '../../redux/event-operations/event-operations';

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
    dispatch(authorizeAction(participantObj));

    // setting events user to state
    dispatch(getEventOperation());

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
