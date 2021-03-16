import { combineReducers } from 'redux';

import {
  AUTHORIZE,
  UNAUTHORIZE,
  GET_SUCCESS,
  GET_PENDING,
  GET_ERROR,
  POST_SUCCESS,
  POST_ERROR,
  POST_PENDING,
  DELETE_PENDING,
  DELETE_ERROR,
  DELETE_SUCCESS,
} from '../action-types/action-types';

const defaultState = {
  authorization: false,
  member: {},
};
export const authReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case AUTHORIZE:
      return { authorization: true, member: payload };
    case UNAUTHORIZE:
      return { authorization: false, member: {} };
    default:
      return state;
  }
};
const initialState = { status: null, data: [], error: null, pending: false };
export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PENDING:
      return { ...state, pending: true };

    // eslint-disable-next-line no-fallthrough
    case GET_SUCCESS:
      return {
        ...state,
        ...payload,
        pending: false,
      };
    case GET_ERROR:
      return { ...state, error: payload.error, pending: false };
    case POST_PENDING:
      return { ...state, pending: true };

    // eslint-disable-next-line no-fallthrough
    case POST_SUCCESS:
      return {
        ...state,
        ...payload,
        pending: false,
      };
    case POST_ERROR:
      return { ...state, error: payload.error, pending: false };
    case DELETE_PENDING:
      return { ...state, pending: true };

    // eslint-disable-next-line no-fallthrough
    case DELETE_SUCCESS:
      return {
        ...state,
        ...payload,
        pending: false,
      };
    case DELETE_ERROR:
      return { ...state, error: payload.error, pending: false };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  authorization: authReducer,
  events: eventReducer,
});
