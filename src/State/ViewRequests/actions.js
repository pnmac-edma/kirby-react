import * as types from './types';

export const userRequestsFetch = () => {
  return {
    type: types.USER_REQUESTS_FETCH
  };
};
export const userRequestsSuccess = response => {
  return {
    type: types.USER_REQUESTS_SUCCESS,
    payload: response
  };
};
export const userRequestsFailure = error => {
  return {
    type: types.USER_REQUESTS_FAILURE,
    payload: error
  };
};

export const approverRequestsFetch = () => {
  return {
    type: types.APPROVER_REQUESTS_FETCH
  };
};
export const approverRequestsSuccess = response => {
  return {
    type: types.APPROVER_REQUESTS_SUCCESS,
    payload: response
  };
};
export const approverRequestsFailure = error => {
  return {
    type: types.APPROVER_REQUESTS_FAILURE,
    payload: error
  };
};

export const pendingRequestsFetch = () => {
  return {
    type: types.SENT_REQUESTS_FETCH
  };
};
export const pendingRequestsSuccess = response => {
  return {
    type: types.SENT_REQUESTS_SUCCESS,
    payload: response
  };
};
export const pendingRequestsFailure = error => {
  return {
    type: types.SENT_REQUESTS_FAILURE,
    payload: error
  };
};
