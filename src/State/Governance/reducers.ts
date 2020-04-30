import * as types from './types';

export const initialState = {
  setSelectedRemoveRowId: null,
  governors: null,
  sensitivity: null,
  domainOwners: null,
  isLoading: false,
  message: null
};

const governanceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_REMOVE_SELECTED_ROW:
      return { ...state, setSelectedRemoveRowId: action.Id };
    case types.SET_REMOVE_GOVERNOR: {
      // @ts-ignore
      const newGovernors = state.governors.filter(
        (governor: { Id: null }) => governor.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, governors: newGovernors };
    }
    case types.SET_REMOVE_SENSITIVITY_LEVELS: {
      // @ts-ignore
      const newSensitivity = state.sensitivity.filter(
        (sensitivity: { Id: null }) =>
          sensitivity.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, sensitivity: newSensitivity };
    }
    case types.SET_REMOVE_DOMAIN_MANAGERS: {
      // @ts-ignore
      const newDomainOwners = state.domainOwners.filter(
        (domainOwner: { Id: null }) =>
          domainOwner.Id !== state.setSelectedRemoveRowId
      );
      return { ...state, domainOwners: newDomainOwners };
    }
    case types.DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state, isLoading: true };
    case types.DOMAIN_OWNERS_REQUEST_SUCCESS: {
      return { ...state, domainOwners: action.domainOwners, isLoading: false };
    }
    case types.DELETE_DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state };
    case types.DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS:
      return { ...state, message: action.message };
    case types.SENSITIVITY_LEVELS_REQUEST_FETCH:
      return { ...state, isLoading: true };
    case types.SENSITIVITY_LEVELS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, sensitivity: action.sensitivity };
    case types.DELETE_SENSITIVITY_LEVELS_REQUEST_FETCH:
      return { ...state };
    case types.DELETE_SENSITIVITY_LEVELS_REQUEST_SUCCESS:
      return { ...state, message: action.message };
    case types.GOVERNORS_REQUEST_FETCH:
      return { ...state, isLoading: true };
    case types.GOVERNORS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, governors: action.governors };
    case types.DELETE_GOVERNORS_REQUEST_FETCH:
      return { ...state };
    case types.DELETE_GOVERNORS_REQUEST_SUCCESS:
      return { ...state, message: action.message };
    default:
      return state;
  }
};

export default governanceReducer;
