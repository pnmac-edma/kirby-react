import * as types from './types';

export const userRequestsFetch = createdbyemail => {
  return {
    type: types.USER_REQUESTS_FETCH,
    payload: createdbyemail
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
export const getArchivedRequests = () => {
  return {
    type: types.GET_ARCHIVED_REQUESTS
  };
};

export const setToggleViewCheckbox = (selected, id) => ({
  type: types.SET_TOGGLE_VIEW_CHECKBOX,
  selected,
  id
});

export const setToggleViewAllCheckbox = (selected, data) => ({
  type: types.SET_TOGGLE_VIEW_ALL_CHECKBOX,
  selected,
  data
});

export const setToggleSentCheckbox = (selected, id) => ({
  type: types.SET_TOGGLE_SENT_CHECKBOX,
  selected,
  id
});

export const setToggleSentAllCheckbox = (selected, data) => ({
  type: types.SET_TOGGLE_SENT_ALL_CHECKBOX,
  selected,
  data
});

export const setToggleArchivedCheckbox = (selected, id) => ({
  type: types.SET_TOGGLE_ARCHIVED_CHECKBOX,
  selected,
  id
});

export const setToggleArchivedAllCheckbox = (selected, data) => ({
  type: types.SET_TOGGLE_ARCHIVED_ALL_CHECKBOX,
  selected,
  data
});

export const setFooterButtonClick = selected => {
  return {
    type: types.HANDLE_FOOTER_BUTTON_CLICK,
    payload: selected
  };
};
