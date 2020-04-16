import * as types from './types';
import mockGovernors from '../__mockData__/mockGovernors.json';

export const initialState = {
  setSelectedRemoveRowId: null,
  governors: mockGovernors
};

const governanceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_REMOVE_SELECTED_ROW:
      return { ...state, setSelectedRemoveRowId: action.Id };
    case types.SET_REMOVE_GOVERNOR: {
      const newGovernors = state.governors.filter(
        governor => governor.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, governors: newGovernors };
    }
    default:
      return state;
  }
};

export default governanceReducer;
