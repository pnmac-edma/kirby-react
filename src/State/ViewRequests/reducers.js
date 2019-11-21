import { combineReducers } from 'redux';
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

const userRequestsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

const approverRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APPROVER_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.APPROVER_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.APPROVER_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

const pendingRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PENDING_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.PENDING_REQUESTS_SUCCESS: {
      return { ...state, outboundRequests: action.payload };
    }
    case types.PENDING_REQUESTS_FAILURE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

const selectedRequestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_REQUEST: {
      return {
        ...state,
        selectedRequests: [...selectedRequests, action.payload]
      };
    }
    case types.UNSELECT_REQUEST: {
      return {
        ...state,
        selectedRequests: selectedRequests.filter(
          request => request.id !== action.payload.requestId
        )
      };
    }
  }
};

const reducer = combineReducers({
  userRequests: userRequestsReducer,
  approverRequests: approverRequestsReducer,
  pendingRequests: pendingRequestsReducer,
  selectedRequests: selectedRequestsReducer
});

export default reducer;
