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

// auth actions
export const authorizeAction = value => ({
  type: AUTHORIZE,
  payload: value,
});

export const unAuthorizeAction = value => ({
  type: UNAUTHORIZE,
  payload: value,
});

// delete event actions
export const getEventError = error => ({
  type: GET_ERROR,
  payload: error,
});
export const getEventSucces = value => ({
  type: GET_SUCCESS,
  payload: value,
});
export const getEventPending = () => ({
  type: GET_PENDING,
});

// add event actions
export const addEventError = error => ({
  type: POST_ERROR,
  payload: error,
});
export const addEventSucces = value => ({
  type: POST_SUCCESS,
  payload: value,
});
export const addEventPending = () => ({
  type: POST_PENDING,
});

// delete event actions
export const deleteEventError = error => ({
  type: DELETE_ERROR,
  payload: error,
});
export const deleteEventSucces = value => ({
  type: DELETE_SUCCESS,
  payload: value,
});
export const deleteEventPending = () => ({
  type: DELETE_PENDING,
});
