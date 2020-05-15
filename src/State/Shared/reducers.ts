import * as types from './types';

export const initialState = {
  domains: null
};

const sharedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_DOMAINS_REQUEST_FETCH:
      return { ...state };
    case types.GET_DOMAINS_REQUEST_SUCCESS:
      return { ...state, domains: action.domains };
    default:
      return state;
  }
};

export default sharedReducer;
