import * as types from './types';

// assuming that the token is encoded?
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

export const authenticateFailure = () => {
  return {
    type: types.AUTHENTICATE_FAILURE
  };
};
