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
        AccessKeyID: action.payload.AccessKeyID,
        EmpEmail: action.payload.EmpEmail,
        SamlHash: action.payload.SamlHash,
        SecretKey: action.payload.SecretKey,
        SessionToken: action.payload.SessionToken,
        UserKey: action.payload.UserKey
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
