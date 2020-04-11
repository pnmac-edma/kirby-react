import initialState from '../../Reducers/initialState';
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
  }
) => {
  switch (action.type) {
    case types.SEARCH_RESULT_PAGE_LOAD: {
      return { ...state, searchInput: action.payload };
    }
    case types.SEARCH_HANDLE_INPUT: {
      return { ...state, searchInput: action.payload };
    }
    case types.HANDLE_KEY_PRESS: {
      return { ...state };
    }
    case types.SEARCH_RESULT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        selectedAll: false,
        displaySearchResult: true,
        isSearchClicked: false,
        searchedInput: action.payload
      };
    }
    case types.SEARCH_RESULT_SUCCESS: {
      const searchResultCopy = action.payload.results.map(
        (val: { checked: boolean }) => {
          val.checked = false;
          return val;
        }
      );
      return {
        ...state,
        searchResult: action.payload,
        isLoading: false,
        searchResultCopy: searchResultCopy,
        displaySearchResult: true,
        isSearchClicked: false
      };
    }
    case types.SEARCH_RESULT_FAILURE: {
      return { ...state, searchResult: action.payload, isLoading: false };
    }
    // case types.HANDLE_CHECKBOX_SELECT: {
    //   let ap = action.payload;
    //   let selectedCheckBoxes;
    //   let selectedAll;
    //   if (ap.id === 'all' && ap.checked) {
    //     selectedCheckBoxes = state.searchResultCopy.map(lake => {
    //       lake.checked = true;
    //       return lake;
    //     });
    //     selectedAll = true;
    //   } else if (ap.id === 'all' && !ap.checked) {
    //     selectedCheckBoxes = state.searchResultCopy.map(lake => {
    //       lake.checked = false;
    //       return lake;
    //     });
    //     selectedAll = false;
    //   } else if (ap.id !== 'all') {
    //     selectedCheckBoxes = state.searchResultCopy.map(lake => {
    //       if (Number(lake.Id) === Number(ap.id) && ap.checked) {
    //         lake.checked = true;
    //       } else if (Number(lake.Id) === Number(ap.id) && !ap.checked) {
    //         lake.checked = false;
    //       }
    //       return lake;
    //     });
    //     selectedAll = selectedCheckBoxes.every(lake => lake.checked);
    //   }
    //   return {
    //     ...state,
    //     searchResultCopy: selectedCheckBoxes,
    //     selectedAll: selectedAll
    //   };
    // }
    // case types.SEARCH_RESULT_SORT_SUCCESS: {
    //   const searchResultCopy = action.searchResult.results.map(val => {
    //     val.checked = false;
    //     return val;
    //   });

    //   return {
    //     ...state,
    //     searchResult: action.searchResult,
    //     isLoading: false,
    //     selectedAll: false,
    //     searchResultCopy: searchResultCopy,
    //     sortBy: { ...state.sortBy, [action.columnName]: action.sortDirection }
    //   };
    // }
    case types.HANDLE_FILTER_SELECT: {
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value
        }
      };
    }
    case types.HANDLE_FILTER_CLICK: {
      return {
        ...state,
        isFilterClick: !state.isFilterClick
      };
    }
    // case types.HANDLE_FILTER_REQUEST: {
    //   const filterQueriesCopy = [...state.filterQueries];
    //   let filterTypeCopy = state.filter.filterType;
    //   if (filterTypeCopy === 'contains') {
    //     filterTypeCopy = 'in';
    //   } else if (filterTypeCopy === 'equals') {
    //     filterTypeCopy = 'eq';
    //   } else {
    //     filterTypeCopy = 'notin';
    //   }
    //   const filterValue = {
    //     [state.filter.filterBy]: [state.filter.filterTerm, filterTypeCopy]
    //   };
    //   if (state.filterQueries.length === 0) {
    //     filterQueriesCopy.push(filterValue);
    //   } else if (state.filterQueries.length >= 1) {
    //     const filterQueriesJSON = state.filterQueries.map(filter =>
    //       JSON.stringify(filter)
    //     );
    //     if (filterQueriesJSON.includes(JSON.stringify(filterValue)) === false) {
    //       filterQueriesCopy.push(filterValue);
    //     }
    //   }
    //   return {
    //     ...state,
    //     isFilterClick: !state.isFilterClick,
    //     filterQueries: filterQueriesCopy
    //   };
    // }
    // case types.HANDLE_FILTER_SUCCESS: {
    //   if (typeof action.payload === 'string') {
    //     return {
    //       ...state,
    //       isLoading: false,
    //       selectedAll: false,
    //       isFilterQueriesEmpty: !state.isFilterQueriesEmpty
    //     };
    //   }
    //   const searchResultCopy = action.payload.results.map(val => {
    //     val.checked = false;
    //     return val;
    //   });

    //   return {
    //     ...state,
    //     isLoading: false,
    //     selectedAll: false,
    //     searchResultCopy: searchResultCopy
    //   };
    // }
    case types.HANDLE_REMOVE_CHIP: {
      const filterQueries = [...state.filterQueries];
      filterQueries.splice(action.payload, 1);
      return {
        ...state,
        filterQueries: filterQueries,
        isFilterQueriesEmpty: false
      };
    }
    case types.HANDLE_REMOVE_CHIP_SUCCESS: {
      const searchResultCopy = action.payload.results.map(
        (val: { checked: boolean }) => {
          val.checked = false;
          return val;
        }
      );

      return {
        ...state,
        isLoading: false,
        selectedAll: false,
        searchResultCopy: searchResultCopy
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
