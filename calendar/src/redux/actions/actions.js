import { eventActionTypes } from '../';

// auth actions
export const authorizeAction = value => ({
  type: eventActionTypes.AUTHORIZE,
  payload: value,
});

export const unAuthorizeAction = value => ({
  type: eventActionTypes.UNAUTHORIZE,
  payload: value,
});

// delete event actions
export const getEventError = error => ({
  type: eventActionTypes.GET_ERROR,
  payload: error,
});
export const getEventSucces = value => ({
  type: eventActionTypes.GET_SUCCESS,
  payload: value,
});
export const getEventPending = () => ({
  type: eventActionTypes.GET_PENDING,
});

// add event actions
export const addEventError = error => ({
  type: eventActionTypes.POST_ERROR,
  payload: error,
});
export const addEventSucces = value => ({
  type: eventActionTypes.POST_SUCCESS,
  payload: value,
});
export const addEventPending = () => ({
  type: eventActionTypes.POST_PENDING,
});

// delete event actions
export const deleteEventError = error => ({
  type: eventActionTypes.DELETE_ERROR,
  payload: error,
});
export const deleteEventSucces = value => ({
  type: eventActionTypes.DELETE_SUCCESS,
  payload: value,
});
export const deleteEventPending = () => ({
  type: eventActionTypes.DELETE_PENDING,
});
