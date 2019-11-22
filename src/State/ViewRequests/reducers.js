import * as types from './types';

export const initialState = {
  viewRequests: {
    inboundRequests: [],
    outboundRequests: [],
    selectedRequests: [],
    error: {},
    showStatus: false,
    isLoading: false
  }
};

const viewRequestsReducer = (state = initialState.viewRequests, action) => {
  switch (action.type) {
    case types.USER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.USER_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.USER_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.APPROVER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.APPROVER_REQUESTS_SUCCESS: {
      return { ...state, inboundRequests: action.payload };
    }
    case types.APPROVER_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.GOVERNANCE_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.GOVERNANCE_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.GOVERNANCE_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.SELECT_REQUEST: {
      return {
        ...state,
        selectedRequests: [...state.selectedRequests, action.payload]
      };
    }
    case types.UNSELECT_REQUEST: {
      return {
        ...state,
        selectedRequests: state.selectedRequests.filter(
          request => request.id !== action.payload
        )
      };
    }
    case types.GET_ARCHIVED_REQUESTS: {
      return {
        ...state,
        inboundRequests: state.inboundRequests.filter(
          request => request.archived
        )
      };
    }
    case types.GET_PENDING_REQUESTS: {
      return {
        ...state,
        inboundRequests: state.inboundRequests.filter(
          request => request.requeststatus === 'Pending'
        )
      };
    }
    default:
      return state;
  }
};

export default viewRequestsReducer;
