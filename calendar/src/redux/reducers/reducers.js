import { combineReducers } from 'redux';

import { eventActionTypes } from '../';

const defaulAuthtState = {
  authorization: false,
  member: {},
};
export const authReducer = (state = defaulAuthtState, { type, payload }) => {
  switch (type) {
    case eventActionTypes.AUTHORIZE:
      return { authorization: true, member: payload };
    case eventActionTypes.UNAUTHORIZE:
      return { authorization: false, member: {} };
    default:
      return state;
  }
};

const initialEventState = {
  status: null,
  events: [],
  error: null,
  isLoading: false,
};
export const eventReducer = (state = initialEventState, { type, payload }) => {
  switch (type) {
    case eventActionTypes.GET_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case eventActionTypes.GET_SUCCESS:
      return {
        ...state,
        events: payload.events || [],
        status: payload.status,
        isLoading: false,
      };
    case eventActionTypes.GET_ERROR:
      return { ...state, isLoading: false, error: payload.message };
    case eventActionTypes.POST_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case eventActionTypes.POST_SUCCESS:
      return {
        ...state,
        events: [...state.events, payload.event],
        status: payload.status,
        isLoading: false,
      };
    case eventActionTypes.POST_ERROR:
      return { ...state, isLoading: false, error: payload.message };
    case eventActionTypes.DELETE_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case eventActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        events: state.events.filter(event => event.id !== payload),
        isLoading: false,
      };
    case eventActionTypes.DELETE_ERROR:
      return {
        ...state,
        status: payload.status,
        isLoading: false,
        error: payload.message,
      };
    default:
      return state;
  }
};
export const rootReducer = combineReducers({
  authorization: authReducer,
  events: eventReducer,
});
