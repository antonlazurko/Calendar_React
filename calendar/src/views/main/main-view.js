import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import Selector from '../../components/selector/selector';
import CreateEventView from '../create/creat-event-view';
import { participants, daysArray, timeArray } from '../../data/calendar-data';

import { getEventsData } from '../../redux/selectors/selectors';
import {
  deleteEventOperation,
  addEventOperation,
} from '../../redux/event-operations/event-operations';
import styles from './MainView.module.css';

export default function MainView({ user }) {
  const { events } = useSelector(getEventsData);
  const dispatch = useDispatch();

  const [eventsByParticipant, setEventsByParticipant] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState('');
  const [modalShow, setModalShow] = useState(false);

  // open modal fn
  const handleModalShow = () => setModalShow(true);

  // close modal fn
  const handleModalClose = () => setModalShow(false);

  // sync validation form
  const validateForm = (participantName, eventName, day, time) => {
    if (eventName === '') {
      toast.error('Please type event name!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (day === '') {
      toast.error('Please choose day!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (time === '') {
      toast.error('Please choose time!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    if (participantName.length === 0) {
      toast.error('Please choose participant!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }

    const isAvailableTime = events.filter(
      event => event.data.info.day === day && event.data.info.time === time,
    );
    if (isAvailableTime.length) {
      toast.error('Please choose other time or date!', {
        position: toast.POSITION.TOP_CENTER,
      });
      return false;
    }
    return true;
  };

  // submit form
  const handleSubmit = async (participantName, eventName, day, time) => {
    if (!validateForm(participantName, eventName, day, time)) {
      return;
    }
    const event = {
      title: `'${eventName}'`,
      participants: participantName,
      info: {
        day,
        time,
      },
    };
    dispatch(addEventOperation(event));
    setModalShow(false);
  };

  // select participant fn
  const getParticipant = value => {
    if (!value) {
      setSelectedParticipant('');
      return;
    }
    setSelectedParticipant(Number(value));
  };

  // deleting event on delete button click
  const deleteEvent = event => {
    const deleteEl = event.target;
    if (deleteEl.tagName === 'BUTTON') {
      const result = window.confirm(
        `Are you shure you want to delete "${deleteEl.parentNode.textContent}" event?`,
      );
      if (result) {
        const eventId = event.target.getAttribute('data-id');
        dispatch(deleteEventOperation(eventId));
        deleteEl.parentNode.innerHTML = '';
      }
    }
  };

  // filter events by selected participant
  useEffect(() => {
    selectedParticipant
      ? setEventsByParticipant(
          events.filter(event => {
            return event.data.participants.includes(selectedParticipant);
          }),
        )
      : setEventsByParticipant(events);
  }, [selectedParticipant, events]);

  return (
    <>
      <div className={styles.header}>
        <Selector
          chooseAll={true}
          selectArray={participants}
          onChange={getParticipant}
          multiple={false}
          selectorName="participant"
        />
        <Button
          variant="primary"
          disabled={!user.isAdmin}
          onClick={() => handleModalShow()}
        >
          Create event
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            {daysArray.map(day => (
              <th key={day.id}>{day.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeArray.map((timeObj, index) => {
            const availablEevents = eventsByParticipant?.filter(
              event => event.data.info.time === index,
            );
            const days = new Array(5).fill('');
            availablEevents?.map(event => {
              const { day } = event.data.info;
              days[day] = {
                name: `${event.data.title}`,
                id: event.id,
                className: 'succes',
              };
              return true;
            });
            return (
              <tr key={timeObj.id}>
                <td>{timeObj.name}</td>
                {days.map((day, index) => (
                  <td key={day.id || index} className={styles.td}>
                    {day.name || ''}
                    {day.name && (
                      <Button
                        key={day.id}
                        data-id={day.id}
                        variant="info"
                        disabled={!user.isAdmin}
                        onClick={e => deleteEvent(e)}
                        className={styles.deleteBtn}
                      >
                        x
                      </Button>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      {modalShow && (
        <CreateEventView
          modalShow={modalShow}
          handleSubmit={handleSubmit}
          handleClose={handleModalClose}
          controlOptions={{ participants, daysArray, timeArray }}
        />
      )}
    </>
  );
}
MainView.propTypes = {
  user: PropTypes.object,
};
