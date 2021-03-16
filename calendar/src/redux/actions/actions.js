import {
  AUTHORIZE,
  UNAUTHORIZE,
  GET_SUCCESS,
  GET_ERROR,
  GET_PENDING,
  POST_SUCCESS,
  POST_ERROR,
  POST_PENDING,
  DELETE_PENDING,
  DELETE_ERROR,
  DELETE_SUCCESS,
} from '../action-types/action-types';
import { eventsSingleton } from '../../sevices/API-service';

export const authorizeAction = value => ({
  type: AUTHORIZE,
  payload: value,
});

export const unAuthorizeAction = value => ({
  type: UNAUTHORIZE,
  payload: value,
});

export const getFetchingEvent = () => dispatch => {
  dispatch(getEventPending());
  eventsSingleton
    .getEvent()
    .then(data => dispatch(getEventSucces(data)))
    .catch(error => dispatch(getEventError(error)));
};
export const getEventError = error => ({
  type: GET_ERROR,
  payload: {
    error,
  },
});
export const getEventSucces = value => ({
  type: GET_SUCCESS,
  payload: value,
});
export const getEventPending = () => ({
  type: GET_PENDING,
});

export const addEventAction = body => dispatch => {
  dispatch(addEventPending());
  eventsSingleton
    .de(body)
    .then(data => dispatch(addEventSucces(data)))
    .catch(error => dispatch(addEventPending(error)));
};
export const addEventError = error => ({
  type: POST_ERROR,
  payload: {
    error,
  },
});
export const addEventSucces = value => ({
  type: POST_SUCCESS,
  payload: value,
});
export const addEventPending = () => ({
  type: POST_PENDING,
});

export const deleteEventAction = id => dispatch => {
  dispatch(deleteEventPending());
  eventsSingleton
    .deleteEvent(id)
    .then(data => dispatch(deleteEventSucces(data)))
    .catch(error => dispatch(deleteEventError(error)));
};
export const deleteEventError = error => ({
  type: DELETE_ERROR,
  payload: {
    error,
  },
});
export const deleteEventSucces = value => ({
  type: DELETE_SUCCESS,
  payload: value,
});
export const deleteEventPending = () => ({
  type: DELETE_PENDING,
});
