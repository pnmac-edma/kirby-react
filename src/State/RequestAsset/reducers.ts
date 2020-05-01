import initialState from '../initialState';
import * as types from './types';
import * as typesSearchResult from '../SearchResult/types';

const requestAssetsReducers = (
  state = initialState.requestAssets,
  action: { type?: any; payload?: any; selected?: any; data?: any; id?: any }
) => {
  switch (action.type) {
    case types.REQUEST_ASSETS_CLICK: {
      const { selected, data } = action;
      const selectedSearchResults = data.filter(({ Id }: any) =>
        selected.some((id: any) => id === Id)
      );
      return { ...state, selectedSearchResultCopy: selectedSearchResults };
    }
    case types.GET_EMPLOYEES_FETCH: {
      return { ...state };
    }
    case types.GET_EMPLOYEES_SUCCESS: {
      const employees = action.payload.reduce(
        (
          acc: { value: any; label: any; email: any }[],
          user: { displayname: any; email: any }
        ) => {
          acc.push({
            value: user.displayname,
            label: user.displayname,
            email: user.email
          });
          return acc;
        },
        []
      );
      return { ...state, employees: employees };
    }
    case types.GET_EMPLOYEES_FAILURE: {
      return { ...state, employees: action.payload };
    }
    case types.HANDLE_SELECTED_EMPLOYEES: {
      return { ...state, selectedEmployees: action.payload || [] };
    }
    case types.HANDLE_MODAL_TOGGLE: {
      return { ...state, openModal: !state.openModal };
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
    case types.SET_CLEAR_SELECTED_ASSETS: {
      return {
        ...state,
        selectedAssets: []
      };
    }
    case types.SET_TOGGLE_ASSET_CHECKBOX: {
      const { selected, id } = action;
      const selectedIndex = selected.indexOf(id);
      const newSelected = [...selected];

      if (selectedIndex === -1) {
        newSelected.push(id);
      } else {
        newSelected.splice(selectedIndex, 1);
      }

      return {
        ...state,
        selectedAssets: newSelected
      };
    }
    case types.SET_TOGGLE_ASSET_ALL_CHECKBOX: {
      const { selected, data } = action;

      let newSelecteds = [];
      if (selected.length === 0) {
        newSelecteds = data.map((request: { Id: any }) => request.Id);
      }

      return {
        ...state,
        selectedAssets: newSelecteds
      };
    }
    case typesSearchResult.SET_REMOVE_SELECTED: {
      return {
        ...state,
        openModal: !state.openModal,
        selectedAssets: []
      };
    }
    default:
      return state;
  }
};

export default requestAssetsReducers;
