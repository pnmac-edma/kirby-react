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

export const userEvaluateFetch = () => ({
  type: types.USER_EVALUATE_FETCH
});

export const userEvaluateSuccess = response => ({
  type: types.USER_EVALUATE_SUCCESS,
  response
});

export const userEvaluateFailure = error => ({
  type: types.USER_EVALUATE_FAILURE,
  error
});
