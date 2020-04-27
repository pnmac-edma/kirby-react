import * as types from './types';
import mockGovernors from '../__mockData__/mockGovernors.json';
import mockSensitivityLevelsData from '../__mockData__/mockSensitivityLevelsData.json';

export const initialState = {
  setSelectedRemoveRowId: null,
  governors: mockGovernors,
  sensitivity: mockSensitivityLevelsData,
  domainOwners: null
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
      // @ts-ignore
      const newDomainOwners = state.domainOwners.filter(
        domainOwner => domainOwner.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, domainOwners: newDomainOwners };
    }
    case types.DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state };
    case types.DOMAIN_OWNERS_REQUEST_SUCCESS: {
      return { ...state, domainOwners: action.domainOwners };
    }
    default:
      return state;
  }
};

export default governanceReducer;
