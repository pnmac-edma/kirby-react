import initialState from '../initialState';
import * as types from './types';

const searchReducer = (
  state = initialState.searchResult,
  action: {
    type?: any;
    payload?: any;
    searchResult?: any;
    columnName?: any;
    sortDirection?: any;
    selected?: any;
    id?: any;
    data?: any;
    selectedAssets?: any;
    searchedInput?: any;
  }
) => {
  switch (action.type) {
    case types.SEARCH_HANDLE_INPUT: {
      return {
        ...state,
        searchInput: {
          value: action.payload,
          isError: action.payload === '',
          isTouched: true
        }
      };
    }
    case types.HANDLE_KEY_PRESS: {
      return { ...state };
    }
    case types.SEARCH_RESULT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isSearchClicked: false,
        searchInput: {
          value: '',
          isError: false,
          isTouched: false
        },
        selected: []
      };
    }
    case types.SEARCH_RESULT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isSearchClicked: false,
        searchResult: action.payload,
        searchInput: {
          value: '',
          isError: false,
          isTouched: false
        }
      };
    }
    case types.SEARCH_RESULT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        searchInput: {
          value: '',
          isError: false,
          isTouched: false
        }
      };
    }
    case types.HANDLE_SEARCH_CLICK: {
      return {
        ...state,
        isSearchClicked: true
      };
    }
    case types.HANDLE_SEARCH_CLOSE: {
      return {
        ...state,
        isSearchClicked: false
      };
    }
    case types.SET_SEARCHED_INPUT: {
      return {
        ...state,
        searchedInput: action.searchedInput
      };
    }
    case types.SET_REMOVE_SELECTED: {
      const { selectedAssets } = action;
      const { selected } = state;
      const newSelected = selected.filter(
        (id: number) => !selectedAssets.includes(id)
      );

      return {
        ...state,
        selected: newSelected
      };
    }
    case types.SET_TOGGLE_SEARCH_CHECKBOX: {
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
    case types.SET_TOGGLE_SEARCH_ALL_CHECKBOX: {
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

export default searchReducer;
