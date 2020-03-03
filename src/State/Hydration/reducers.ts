import * as types from './types';

export const initialState = {
  jobName: '',
  selectedNode: null,
  sources: [],
  transforms: [],
  transformsFilter: '',
  transformsCreate: {},
  destinations: [],
  destinationsFilterSens: [],
  destinationsFilter: '',
  destinationsCreate: {},
  scheduleJob: {}
};

const viewRequestsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_SELECTED_NODE: {
      // TODO: fix the action null issue
      if (!action.event) {
        return { ...state };
      }
      const { isSelected, entity } = action.event;
      if (isSelected) {
        return { ...state, selectedNode: entity };
      }
      return { ...state, selectedNode: null };
    }
    case types.SET_REMOVE_NODE: {
      return {
        ...state,
        selectedNode: null
      };
    }
    default:
      return state;
  }
};

export default viewRequestsReducer;
