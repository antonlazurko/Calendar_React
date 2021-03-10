import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import JSON5 from 'json5';

import Selector from '../components/selector';
import { participants, daysArray, timeArray } from '../data/calendar-data';
import { eventsSingleton } from '../sevices/API-service';

export default function MainView({ isAdmin }) {
  const [meetings, setMeetings] = useState([]);
  const [meetingsByParticipant, setMeetingsByParticipant] = useState([]);
  const [selectedParticipant, setSelectedParticipant] = useState('');

  const getParticipant = value => {
    if (!value) {
      setSelectedParticipant('');
      return;
    }
    const participant = participants.find(
      participant => participant.user.name === value,
    );
    setSelectedParticipant(participant.user.id);
  };
  const deleteEvent = async event => {
    const deleteEl = event.target;
    if (deleteEl.tagName === 'BUTTON') {
      const result = window.confirm(
        `Are you shure you want to delete "${deleteEl.parentNode.textContent}" event?`,
      );
      if (result) {
        const meetingId = event.target.getAttribute('data-id');

        // using singletone pattern
        await eventsSingleton.deleteEvent(meetingId).then(status => {
          if (status === 204) {
            deleteEl.parentNode.innerHTML = '';
          }
        });
      }
    }
  };
  useEffect(() => {
    async function fetchData() {
      const data = await eventsSingleton.getEvent();
      const parsedMeetings = data.map(event => ({
        id: event.id,
        data: JSON5.parse(event.data),
      }));
      setMeetings(parsedMeetings);
    }
    fetchData();
  }, []);

  useEffect(() => {
    selectedParticipant
      ? setMeetingsByParticipant(
          meetings.filter(meeting => {
            return meeting.data.participants.includes(selectedParticipant);
          }),
        )
      : setMeetingsByParticipant(meetings);
  }, [selectedParticipant, meetings]);

  const handleCreateEventBtn = async () => {};
  return (
    <>
      <Selector
        selectArray={participants}
        onChange={getParticipant}
        multiple={false}
        selectorName="participant"
      />
      <Button
        variant="secondary"
        disabled={!isAdmin}
        onClick={event => handleCreateEventBtn(event)}
      >
        Create event
      </Button>
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
            const availableMeetings = meetingsByParticipant.filter(
              meeting => meeting.data.info.time === index,
            );
            const days = new Array(5).fill('');
            availableMeetings.map(meeting => {
              const { day } = meeting.data.info;
              days[day] = {
                name: `${meeting.data.title}`,
                id: meeting.id,
              };
              return true;
            });
            return (
              <tr key={timeObj.id}>
                <td>{timeObj.name}</td>
                {days.map((day, index) => (
                  <td key={day.id || index}>
                    {day.name || ''}
                    {day.name && (
                      <Button
                        key={day.id}
                        data-id={day.id}
                        variant="secondary"
                        disabled={!isAdmin}
                        onClick={e => deleteEvent(e)}
                      >
                        X
                      </Button>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
MainView.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};
