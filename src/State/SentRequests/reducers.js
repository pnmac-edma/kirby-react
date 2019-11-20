import { combineReducers } from 'redux';
import * as types from './types';

// initial state
const initialState = {
  sentRequests: [],
  isLoading: false,
  error: false
};

// Reducers
const sentRequestsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case types.SENT_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.SENT_REQUESTS_SUCCESS: {
      return { ...state, sentRequests: action.payload };
    }
    case types.SENT_REQUESTS_FAILURE: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
};

const reducer = combineReducers({
  sentRequests: sentRequestsReducer
});

export default reducer;
