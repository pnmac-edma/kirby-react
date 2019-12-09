import initialState from '../../Reducers/initialState';
import * as types from './types';

const authReducer = (state = initialState.currentUser, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_FETCH: {
      return { ...state };
    }
    case types.AUTHENTICATE_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        error: {}
      };
    }
    case types.AUTHENTICATE_FAILURE: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
