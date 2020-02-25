import * as types from './types';

export const initialState = {
  inboundRequests: [], // for elevated users, this would be approver or governance requests
  outboundRequests: [], // stores all user requests
  selectedRequests: [],
  selectedSentRequests: [],
  error: {},
  isLoading: false
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
    case types.SET_TOGGLE_VIEW_CHECKBOX: {
      const { selected, id } = action;
      const selectedIndex = selected.indexOf(id);
      const newSelected = [...selected];

      if (selectedIndex === -1) {
        newSelected.push(id);
      } else {
        newSelected.splice(selectedIndex, 1);
      }

      return {
        ...state,
        selectedRequests: newSelected
      };
    }
    case types.SET_TOGGLE_VIEW_ALL_CHECKBOX: {
      const { selected, data } = action;

      let newSelecteds = [];
      if (selected.length === 0) {
        newSelecteds = data.map(request => request.Id);
      }

      return {
        ...state,
        selectedRequests: newSelecteds
      };
    }
    case types.SET_TOGGLE_SENT_CHECKBOX: {
      const { selected, id } = action;
      const selectedIndex = selected.indexOf(id);
      const newSelected = [...selected];

      if (selectedIndex === -1) {
        newSelected.push(id);
      } else {
        newSelected.splice(selectedIndex, 1);
      }

      return {
        ...state,
        selectedSentRequests: newSelected
      };
    }
    case types.SET_TOGGLE_SENT_ALL_CHECKBOX: {
      const { selected, data } = action;

      let newSelecteds = [];
      if (selected.length === 0) {
        newSelecteds = data.map(request => request.Id);
      }

      return {
        ...state,
        selectedSentRequests: newSelecteds
      };
    }
    default:
      return state;
  }
};

export default viewRequestsReducer;
