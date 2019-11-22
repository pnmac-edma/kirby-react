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

export const approverRequestsFetch = approverEmail => {
  return {
    type: types.APPROVER_REQUESTS_FETCH,
    payload: approverEmail
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

export const governanceRequestsFetch = () => {
  return {
    type: types.GOVERNANCE_REQUESTS_FETCH
  };
};
export const governanceRequestsSuccess = response => {
  return {
    type: types.GOVERNANCE_REQUESTS_SUCCESS,
    payload: response
  };
};
export const governanceRequestsFailure = error => {
  return {
    type: types.GOVERNANCE_REQUESTS_FAILURE,
    payload: error
  };
};

export const selectRequest = request => {
  return {
    type: types.SELECT_REQUEST,
    payload: request
  };
};

export const unselectRequest = requestId => {
  return {
    type: types.SELECT_REQUEST,
    payload: requestId
  };
};
