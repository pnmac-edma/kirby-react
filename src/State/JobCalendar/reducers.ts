import * as types from './types';

export const initialState = {
  searchJobsText: '',
  mySelectedJobs: [],
  otherSelectedJobs: []
};

const getNextValue = (field: string, value: any, state: any) => {
  if (field === 'mySelectedJobs' || field === 'otherSelectedJobs') {
    // this logic removes the value if it exists, or adds if it doesn't
    const { mySelectedJobs, otherSelectedJobs } = state;
    const selectedList =
      field === 'mySelectedJobs' ? mySelectedJobs : otherSelectedJobs;
    const isChecked = selectedList.find((job: string) => job === value);
    if (isChecked) {
      return selectedList.filter((job: string) => job !== value);
    }
    return [...selectedList, value];
  }

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
