import * as types from './types';
import mockGovernors from '../__mockData__/mockGovernors.json';
import mockSensitivityLevelsData from '../__mockData__/mockSensitivityLevelsData.json';
import mockDomainManagerData from '../__mockData__/mockDomainManagerData.json';

export const initialState = {
  setSelectedRemoveRowId: null,
  governors: mockGovernors,
  sensitivity: mockSensitivityLevelsData,
  managers: mockDomainManagerData
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
    case types.SET_REMOVE_SENSITIVITY_LEVELS: {
      const newSensitivity = state.sensitivity.filter(
        sensitivity => sensitivity.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, sensitivity: newSensitivity };
    }
    case types.SET_REMOVE_DOMAIN_MANAGERS: {
      const newManagers = state.managers.filter(
        manager => manager.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, managers: newManagers };
    }
    default:
      return state;
  }
};

export default governanceReducer;
