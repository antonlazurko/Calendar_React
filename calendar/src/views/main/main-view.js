import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import JSON5 from 'json5';
import { toast } from 'react-toastify';

import Selector from '../../components/selector/selector';
import CreateEventView from '../create/creat-event-view';
import { participants, daysArray, timeArray } from '../../data/calendar-data';

import { eventsSingleton } from '../../sevices/API-service';

import styles from './MainView.module.css';

export default function MainView({ user }) {
  const [meetings, setMeetings] = useState([]);
  const [meetingsByParticipant, setMeetingsByParticipant] = useState([]);
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

    const isAvailableTime = meetings.filter(
      meeting =>
        meeting.data.info.day === day && meeting.data.info.time === time,
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
    if (!(await validateForm(participantName, eventName, day, time))) {
      return;
    }
    const meeting = {
      title: `'${eventName}'`,
      participants: [participantName],
      info: {
        day,
        time,
      },
    };

    const stringifyMeeting = JSON.stringify(meeting).replace(/"/g, '');
    await eventsSingleton
      .addEvent(
        `{
    "data":"${stringifyMeeting}"
  }`,
      )
      .then(({ data, status }) => {
        if (status === 200) {
          toast.success('Event succesfully added!', {
            position: toast.POSITION.TOP_CENTER,
          });
          const parsedMeeting = {
            id: data.id,
            data: JSON5.parse(data.data),
          };
          setMeetings(prevMeetings => [...prevMeetings, parsedMeeting]);
        }
      });
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
  const deleteEvent = async event => {
    const deleteEl = event.target;
    if (deleteEl.tagName === 'BUTTON') {
      const result = window.confirm(
        `Are you shure you want to delete "${deleteEl.parentNode.textContent}" event?`,
      );
      if (result) {
        const meetingId = event.target.getAttribute('data-id');

        await eventsSingleton.deleteEvent(meetingId).then(status => {
          if (status === 204) {
            toast.success('Event succesfully deleted!', {
              position: toast.POSITION.TOP_CENTER,
            });
            deleteEl.parentNode.innerHTML = '';
          }
        });
      }
    }
  };

  // fetching meeting at first render
  useEffect(() => {
    async function fetchData() {
      const { data, status } = await eventsSingleton.getEvent();
      if (data) {
        const parsedMeetings = data?.map(event => ({
          id: event.id,
          data: JSON5.parse(event.data),
        }));
        setMeetings(parsedMeetings);
        toast.success(`Events succesfully get with status: ${status}!`, {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      toast.success('There are no events in your calendar yet!', {
        position: toast.POSITION.TOP_CENTER,
      });
      setMeetings([]);
    }
    fetchData();
  }, []);

  // filter events by selected participant
  useEffect(() => {
    selectedParticipant
      ? setMeetingsByParticipant(
          meetings.filter(meeting => {
            return meeting.data.participants.includes(selectedParticipant);
          }),
        )
      : setMeetingsByParticipant(meetings);
  }, [selectedParticipant, meetings]);

  return (
    <>
      <div className={styles.header}>
        <Selector
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
            const availableMeetings = meetingsByParticipant?.filter(
              meeting => meeting.data.info.time === index,
            );
            const days = new Array(5).fill('');
            availableMeetings?.map(meeting => {
              const { day } = meeting.data.info;
              days[day] = {
                name: `${meeting.data.title}`,
                id: meeting.id,
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
