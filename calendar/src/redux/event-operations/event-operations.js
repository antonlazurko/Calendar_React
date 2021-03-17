import axios from 'axios';
import JSON5 from 'json5';

import { eventActions } from '../';

const SYSTEM = `anton_lazurko`;
const ENTITY = `events`;
const URL = 'http://158.101.166.74:8080/api/data/';

export const getEventOperation = () => async dispatch => {
  dispatch(eventActions.getEventPending());
  try {
    const { data, status } = await axios.get(`${URL}${SYSTEM}/${ENTITY}`);
    const events = data?.map(event => ({
      id: event.id,
      data: JSON5.parse(event.data),
    }));
    return dispatch(eventActions.getEventSucces({ events, status }));
  } catch (error) {
    return dispatch(eventActions.getEventError(error));
  }
};
export const addEventOperation = body => async dispatch => {
  dispatch(eventActions.addEventPending());
  try {
    const stringifyMeeting = JSON.stringify(body).replace(/"/g, '');
    const { data, status } = await axios.post(
      `${URL}${SYSTEM}/${ENTITY}`,
      `{
    "data":"${stringifyMeeting}"
  }`,
    );
    const event = {
      id: data.id,
      data: JSON5.parse(data.data),
    };
    return dispatch(eventActions.addEventSucces({ event, status }));
  } catch (error) {
    return dispatch(eventActions.addEventError(error));
  }
};
export const deleteEventOperation = id => async dispatch => {
  dispatch(eventActions.deleteEventPending());
  try {
    axios.delete(`${URL}${SYSTEM}/${ENTITY}/${id}`);
    return dispatch(eventActions.deleteEventSucces(id));
  } catch (error) {
    return dispatch(eventActions.deleteEventError(error));
  }
};
