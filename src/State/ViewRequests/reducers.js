import * as types from './types';

export const initialState = {
  inboundRequests: [], // for elevated users, this would be approver or governance requests
  outboundRequests: [], // stores all user requests
  selectedRequests: [],
  selectedSentRequests: [],
  selectedArchivedRequests: [],
  error: {},
  isLoading: false
};

const generateNewSelected = (selected, id) => {
  const selectedIndex = selected.indexOf(id);
  const newSelected = [...selected];
  if (selectedIndex === -1) {
    newSelected.push(id);
  } else {
    newSelected.splice(selectedIndex, 1);
  }
  return newSelected;
};

const generateNewAllSelected = (selected, data) => {
  let newSelecteds = [];
  if (selected.length === 0) {
    newSelecteds = data.map(request => request.Id);
  }
  return newSelecteds;
};

const viewRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.USER_REQUESTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        outboundRequests: action.payload,
        error: {}
      };
    }
    case types.USER_REQUESTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case types.APPROVER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.APPROVER_REQUESTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        inboundRequests: action.payload,
        error: {}
      };
    }
    case types.APPROVER_REQUESTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case types.GOVERNANCE_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.GOVERNANCE_REQUESTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        inboundRequests: action.payload,
        error: {}
      };
    }
    case types.GOVERNANCE_REQUESTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case types.GET_ARCHIVED_REQUESTS: {
      return {
        ...state,
        inboundRequests: state.inboundRequests.filter(
          request => request.archived
        )
      };
    }
    case types.REQ_DECISION_REQUEST_FETCH: {
      // TODO: maybe add req decision loading status
      return { ...state };
    }
    case types.REQ_DECISION_REQUEST_SUCCESS: {
      console.log(action.response);
      // TODO: add message for snackbar notification
      return { ...state };
    }
    case types.REQ_DECISION_REQUEST_FAILURE: {
      console.log(action.error);
      // TODO: add message for snackbar notification
      return { ...state };
    }
    case types.SET_TOGGLE_VIEW_CHECKBOX: {
      return {
        ...state,
        selectedRequests: generateNewSelected(action.selected, action.id)
      };
    }
    case types.SET_TOGGLE_VIEW_ALL_CHECKBOX: {
      return {
        ...state,
        selectedRequests: generateNewAllSelected(action.selected, action.data)
      };
    }
    case types.SET_TOGGLE_SENT_CHECKBOX: {
      return {
        ...state,
        selectedSentRequests: generateNewSelected(action.selected, action.id)
      };
    }
    case types.SET_TOGGLE_SENT_ALL_CHECKBOX: {
      return {
        ...state,
        selectedSentRequests: generateNewAllSelected(
          action.selected,
          action.data
        )
      };
    }
    case types.SET_TOGGLE_ARCHIVED_CHECKBOX: {
      return {
        ...state,
        selectedArchivedRequests: generateNewSelected(
          action.selected,
          action.id
        )
      };
    }
    case types.SET_TOGGLE_ARCHIVED_ALL_CHECKBOX: {
      return {
        ...state,
        selectedArchivedRequests: generateNewAllSelected(
          action.selected,
          action.data
        )
      };
    }
    case types.HANDLE_FOOTER_BUTTON_CLICK: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default viewRequestsReducer;
