import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormControl, InputGroup, Button, Modal } from 'react-bootstrap';

import Selector from '../../components/selector/selector';

export default function CreateEventView({
  handleClose,
  modalShow,
  controlOptions,
  handleSubmit,
}) {
  const { participants, daysArray, timeArray } = controlOptions;
  const [eventName, setEventName] = useState('');
  const [participantName, setParticipantName] = useState([]);
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  return (
    <>
      <Modal show={modalShow} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup
            size="sm"
            className="mb-3"
            onChange={e => setEventName(e.target.value)}
          >
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
          <Selector
            multiple={true}
            onChange={value => setParticipantName(Number(value))}
            selectArray={participants}
            selectorName="participant"
          />
          <Selector
            multiple={false}
            onChange={value => setDay(Number(value))}
            selectArray={daysArray}
            selectorName="day"
          />
          <Selector
            multiple={false}
            onChange={value => setTime(Number(value))}
            selectArray={timeArray}
            selectorName="time"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubmit(participantName, eventName, day, time)}
          >
            Create event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
CreateEventView.propTypes = {
  handleClose: PropTypes.func,
  modalShow: PropTypes.bool,
  controlOptions: PropTypes.objectOf(PropTypes.array),
  handleSubmit: PropTypes.func,
};
