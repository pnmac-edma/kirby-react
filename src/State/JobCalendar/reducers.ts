import * as types from './types';

export const initialState = {
  searchJobsText: ''
};

const getNextValue = (field: string, value: any, state: any) => {
  // add field checks if needed

  return value;
};

const jobCalendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_FIELD: {
      const { field, value } = action;
      const nextValue = getNextValue(field, value, state);
      return {
        ...state,
        [field]: nextValue
      };
    }
    default:
      return state;
  }
};

export default jobCalendarReducer;
