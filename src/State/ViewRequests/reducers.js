import * as types from './types';

export const initialState = {
  inboundRequests: [], // for elevated users, this would be approver or governance requests
  outboundRequests: [], // stores all user requests
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
    default:
      return state;
  }
};

export default viewRequestsReducer;
