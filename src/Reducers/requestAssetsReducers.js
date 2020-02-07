import initialState from './initialState';
import * as types from '../Actions/types';

const requestAssetsReducers = (state = initialState.requestAssets, action) => {
  switch (action.type) {
    case types.REQUEST_ASSETS_CLICK: {
      const searchResultCopy = action.payload.map(value => {
        value.chec = false;
        return value;
      });
      return { ...state, selectedSearchResultCopy: searchResultCopy };
    }
    case types.REQUEST_CHECKBOX_SELECT: {
      let ap = action.payload;
      let selectedCheckBoxes;
      let selectedAll;
      if (ap.id === 'all' && ap.checked) {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(lake => {
          lake.chec = true;
          return lake;
        });
        selectedAll = true;
      } else if (ap.id === 'all' && !ap.checked) {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(lake => {
          lake.chec = false;
          return lake;
        });
        selectedAll = false;
      } else if (ap.id !== 'all') {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(lake => {
          if (Number(lake.Id) === Number(ap.id) && ap.checked) {
            lake.chec = true;
          } else if (Number(lake.Id) === Number(ap.id) && !ap.checked) {
            lake.chec = false;
          }
          return lake;
        });
        selectedAll = selectedCheckBoxes.every(lake => lake.chec);
      }
      return {
        ...state,
        selectedSearchResultCopy: selectedCheckBoxes,
        selectedAll: selectedAll
      };
    }
    case types.GET_EMPLOYEES_FETCH: {
      return { ...state };
    }
    case types.GET_EMPLOYEES_SUCCESS: {
      const employees = action.payload.reduce((acc, user) => {
        acc.push({
          value: user.displayname,
          label: user.displayname,
          email: user.email
        });
        return acc;
      }, []);
      return { ...state, employees: employees };
    }
    case types.GET_EMPLOYEES_FAILURE: {
      return { ...state, employees: action.payload };
    }
    case types.HANDLE_SELECTED_EMPLOYEES: {
      return { ...state, selectedEmployees: action.payload || [] };
    }
    case 'HANDLE_MODAL_TOGGLE': {
      return { ...state, openModal: !state.openModal };
    }
    case 'HANDLE_REMOVE_SELECTED': {
      const searchResultCopy = state.selectedSearchResultCopy.filter(
        value => !value.chec
      );
      return {
        ...state,
        selectedSearchResultCopy: searchResultCopy,
        openModal: !state.openModal
      };
    }
    case types.MAKE_REQUESTS_FETCH: {
      return { ...state, isLoading: true };
    }
    case types.MAKE_REQUESTS_SUCCESS: {
      return {
        ...state,
        notificationMessage: action.payload.message,
        isLoading: false
      };
    }
    case types.MAKE_REQUESTS_FAILURE: {
      return {
        ...state,
        notificationMessage: action.payload.message,
        isLoading: false
      };
    }
    case types.JUSTIFICATION_HANDLE_INPUT: {
      return {
        ...state,
        justification: action.payload
      };
    }
    default:
      return state;
  }
};

export default requestAssetsReducers;
