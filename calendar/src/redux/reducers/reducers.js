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

const defaulAuthtState = {
  authorization: false,
  member: {},
};
export const authReducer = (state = defaulAuthtState, { type, payload }) => {
  switch (type) {
    case AUTHORIZE:
      return { authorization: true, member: payload };
    case UNAUTHORIZE:
      return { authorization: false, member: {} };
    default:
      return state;
  }
};

const initialEventState = { status: null, events: [], error: null };
export const eventReducer = (state = initialEventState, { type, payload }) => {
  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        events: payload.events || [],
        status: payload.status,
      };
    case GET_ERROR:
      return { ...state, error: payload.message };
    case POST_SUCCESS:
      return {
        ...state,
        events: [...state.events, payload.event],
        status: payload.status,
      };
    case POST_ERROR:
      return { ...state, error: payload.message };
    case DELETE_SUCCESS:
      return {
        ...state,
        events: state.events.filter(event => event.id !== payload),
      };
    case DELETE_ERROR:
      return { ...state, status: payload.status, error: payload.message };
    default:
      return state;
  }
};
export const loadingReducer = (state = false, { type, _ }) => {
  switch (type) {
    case GET_PENDING:
      return true;
    case GET_SUCCESS:
      return false;
    case GET_ERROR:
      return false;
    case POST_PENDING:
      return true;
    case POST_SUCCESS:
      return false;
    case POST_ERROR:
      return false;
    case DELETE_PENDING:
      return true;
    case DELETE_SUCCESS:
      return false;
    case DELETE_ERROR:
      return false;
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  authorization: authReducer,
  events: eventReducer,
  isLoading: loadingReducer,
});
