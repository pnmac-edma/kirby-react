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
    case types.USER_EVALUATE_FETCH: {
      return { ...state };
    }
    case types.USER_EVALUATE_SUCCESS: {
      // const { governance, approver } = action.response;
      return {
        ...state
        // TODO: uncomment this for production;
        //       this is commented out currently because
        //       it prevents access to certain pages for deveopment
        // role: {
        //   isGovernor: governance,
        //   isApprover: approver
        // }
      };
    }
    case types.USER_EVALUATE_FAILURE: {
      console.log('this is user evaluate error', action.error);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
