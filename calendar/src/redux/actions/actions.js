import { AUTHORIZE, UNAUTHORIZE } from '../action-types/action-types';

export const authorizeAction = value => ({
  type: AUTHORIZE,
  payload: value,
});

export const unAuthorizeAction = value => ({
  type: UNAUTHORIZE,
  payload: value,
});
