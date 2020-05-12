import * as types from './types';

export const initialState = {
  setSelectedRemoveRowId: null,
  governors: null,
  sensitivity: null,
  domainOwners: null,
  isLoading: false,
  message: ''
};

const governanceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_REMOVE_SELECTED_ROW:
      return { ...state, setSelectedRemoveRowId: action.Id };
    case types.DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state, isLoading: true, message: '' };
    case types.DOMAIN_OWNERS_REQUEST_SUCCESS:
      return { ...state, domainOwners: action.domainOwners, isLoading: false };
    case types.DELETE_DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    case types.ADD_DOMAIN_OWNERS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.ADD_DOMAIN_OWNERS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    case types.SENSITIVITY_LEVELS_REQUEST_FETCH:
      return { ...state, isLoading: true, message: '' };
    case types.SENSITIVITY_LEVELS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, sensitivity: action.sensitivity };
    case types.DELETE_SENSITIVITY_LEVELS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.DELETE_SENSITIVITY_LEVELS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    case types.ADD_SENSITIVITY_LEVELS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.ADD_SENSITIVITY_LEVELS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    case types.GOVERNORS_REQUEST_FETCH:
      return { ...state, isLoading: true, message: '' };
    case types.GOVERNORS_REQUEST_SUCCESS:
      return { ...state, isLoading: false, governors: action.governors };
    case types.DELETE_GOVERNORS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.DELETE_GOVERNORS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    case types.ADD_GOVERNORS_REQUEST_FETCH:
      return { ...state, message: '' };
    case types.ADD_GOVERNORS_REQUEST_SUCCESS:
      return { ...state, message: action.message.message };
    default:
      return state;
  }
};

export default governanceReducer;
