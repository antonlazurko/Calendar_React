import axios from 'axios';
import JSON5 from 'json5';

import {
  deleteEventError,
  deleteEventSucces,
  deleteEventPending,
  getEventPending,
  getEventSucces,
  getEventError,
  addEventPending,
  addEventSucces,
  addEventError,
} from '../actions/actions';

const SYSTEM = `anton_lazurko`;
const ENTITY = `events`;
const URL = 'http://158.101.166.74:8080/api/data/';

export const getEventOperation = () => async dispatch => {
  dispatch(getEventPending());
  try {
    const { data, status } = await axios.get(`${URL}${SYSTEM}/${ENTITY}`);
    const events = data?.map(event => ({
      id: event.id,
      data: JSON5.parse(event.data),
    }));
    return dispatch(getEventSucces({ events, status }));
  } catch (error) {
    return dispatch(getEventError(error));
  }
};
export const addEventOperation = body => async dispatch => {
  dispatch(addEventPending());
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
    return dispatch(addEventSucces({ event, status }));
  } catch (error) {
    return dispatch(addEventError(error));
  }
};
export const deleteEventOperation = id => async dispatch => {
  dispatch(deleteEventPending());
  try {
    axios.delete(`${URL}${SYSTEM}/${ENTITY}/${id}`);
    return dispatch(deleteEventSucces(id));
  } catch (error) {
    return dispatch(deleteEventError(error));
  }
};
