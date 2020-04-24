import initialState from '../initialState';
import * as types from './types';

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
    case types.REQUEST_CHECKBOX_SELECT: {
      let ap = action.payload;
      let selectedCheckBoxes;
      let selectedAll;
      if (ap.id === 'all' && ap.checked) {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(
          (lake: { chec: boolean }) => {
            lake.chec = true;
            return lake;
          }
        );
        selectedAll = true;
      } else if (ap.id === 'all' && !ap.checked) {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(
          (lake: { chec: boolean }) => {
            lake.chec = false;
            return lake;
          }
        );
        selectedAll = false;
      } else if (ap.id !== 'all') {
        selectedCheckBoxes = state.selectedSearchResultCopy.map(
          (lake: { Id: any; chec: boolean }) => {
            if (Number(lake.Id) === Number(ap.id) && ap.checked) {
              lake.chec = true;
            } else if (Number(lake.Id) === Number(ap.id) && !ap.checked) {
              lake.chec = false;
            }
            return lake;
          }
        );
        selectedAll = selectedCheckBoxes.every(
          (lake: { chec: any }) => lake.chec
        );
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
    case types.HANDLE_REMOVE_SELECTED: {
      const { selectedSearchResultCopy, selected } = state;
      const searchResultCopy = selectedSearchResultCopy.filter(
        ({ Id }) => !selected.some((id: any) => id === Id)
      );

      return {
        ...state,
        selectedSearchResultCopy: searchResultCopy,
        selected: [],
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
        selected: newSelected
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
        selected: newSelecteds
      };
    }
    default:
      return state;
  }
};

export default requestAssetsReducers;
