import initialState from '../initialState';
import * as types from './types';

const authReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_FETCH: {
      return { ...state };
    }
    case types.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }
    case types.AUTHENTICATE_FAILURE: {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
