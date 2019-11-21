import { combineReducers } from 'redux';
import * as types from './types';

export const initialState = {
  viewRequests: {
    inboundRequests: [],
    outboundRequests: [],
    selectedRequests: [],
    showStatus: false,
    isLoading: false
  }
};

const userRequestsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case types.USER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.USER_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.USER_REQUESTS_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};

const approverRequestsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case types.APPROVER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.APPROVER_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.APPROVER_REQUESTS_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};

const pendingRequestsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case types.PENDING_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.PENDING_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.PENDING_REQUESTS_FAILURE: {
      return { ...state };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  userRequests: userRequestsReducer,
  approverRequests: approverRequestsReducer,
  pendingRequests: pendingRequestsReducer
});

export default reducer;
