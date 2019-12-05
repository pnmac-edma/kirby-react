import * as types from './types';

export const authenticateFetch = token => {
  return {
    type: types.AUTHENTICATE_FETCH,
    payload: token
  };
};

export const authenticateSuccess = response => {
  return {
    type: types.AUTHENTICATE_SUCCESS,
    payload: response
  };
};

export const authenticateFailure = error => {
  return {
    type: types.AUTHENTICATE_FAILURE,
    payload: error
  };
};
