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
      return { ...state, outboundRequests: action.payload };
    }
    case types.APPROVER_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    case types.PENDING_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.PENDING_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.PENDING_REQUESTS_FAILURE: {
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
    default:
      return state;
  }
};

export default viewRequestsReducer;
