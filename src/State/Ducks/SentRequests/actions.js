import * as types from './types';
// Action Creators
const sentRequestsFetch = () => {
  return {
    type: types.SENT_REQUESTS_FETCH
  };
};
const sentRequestsSuccess = response => {
  return {
    type: types.SENT_REQUESTS_SUCCESS,
    payload: response
  };
};
const sentRequestsFailure = () => {
  return {
    type: types.SENT_REQUESTS_FAILURE
  };
};

export { sentRequestsFetch, sentRequestsFailure, sentRequestsSuccess };
