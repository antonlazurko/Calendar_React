import { combineReducers } from 'redux';

import { AUTHORIZE, UNAUTHORIZE } from '../action-types/action-types';

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
export const rootReducer = combineReducers({
  authorization: authReducer,
});
