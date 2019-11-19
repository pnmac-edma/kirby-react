import initialState from './initialState';

const searchReducer = (state = initialState.searchResult, action) => {
  switch (action.type) {
    case 'SEARCH_HANDLE_INPUT': {
      return { ...state, searchInput: action.payload };
    }
    case 'HANDLE_KEY_PRESS': {
      return { ...state };
    }
    case 'SEARCH_RESULT_REQUEST': {
      return {
        ...state,
        isLoading: true,
        selectedAll: false,
        displaySearchResult: true
      };
    }
    case 'SEARCH_RESULT_SUCCESS': {
      const searchResultCopy = action.payload.results.map(val => {
        val.checked = false;
        return val;
      });
      return {
        ...state,
        searchResult: action.payload,
        isLoading: false,
        searchResultCopy: searchResultCopy,
        displaySearchResult: true,
        isSearchClicked: false
      };
    }
    case 'SEARCH_RESULT_FAILURE': {
      return { ...state, searchResult: action.payload, isLoading: false };
    }
    case 'HANDLE_CHECKBOX_SELECT': {
      let ap = action.payload;
      let selectedCheckBoxes;
      let selectedAll;
      if (ap.id === 'all' && ap.checked) {
        selectedCheckBoxes = state.searchResultCopy.map(lake => {
          lake.checked = true;
          return lake;
        });
        selectedAll = true;
      } else if (ap.id === 'all' && !ap.checked) {
        selectedCheckBoxes = state.searchResultCopy.map(lake => {
          lake.checked = false;
          return lake;
        });
        selectedAll = false;
      } else if (ap.id !== 'all') {
        selectedCheckBoxes = state.searchResultCopy.map(lake => {
          if (Number(lake.Id) === Number(ap.id) && ap.checked) {
            lake.checked = true;
          } else if (Number(lake.Id) === Number(ap.id) && !ap.checked) {
            lake.checked = false;
          }
          return lake;
        });
        selectedAll = selectedCheckBoxes.every(lake => lake.checked);
      }
      return {
        ...state,
        searchResultCopy: selectedCheckBoxes,
        selectedAll: selectedAll
      };
    }
    case 'SEARCH_RESULT_SORT_SUCCESS': {
      const searchResultCopy = action.searchResult.results.map(val => {
        val.checked = false;
        return val;
      });

      return {
        ...state,
        searchResult: action.searchResult,
        isLoading: false,
        selectedAll: false,
        searchResultCopy: searchResultCopy,
        sortBy: { ...state.sortBy, [action.columnName]: action.sortDirection }
      };
    }
    case 'HANDLE_FILTER_SELECT': {
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value
        }
      };
    }
    case 'HANDLE_FILTER_CLICK': {
      return {
        ...state,
        isFilterClick: !state.isFilterClick
      };
    }
    case 'HANDLE_FILTER_REQUEST': {
      const filterQueriesCopy = [...state.filterQueries];
      let containCopy = state.filter.contain;
      if (containCopy === 'contain') {
        containCopy = 'in';
      } else if (containCopy === 'equal') {
        containCopy = 'eq';
      } else {
        containCopy = 'notin';
      }
      const filterValue = {
        [state.filter.filterBy]: [state.filter.filterTerm, containCopy]
      };
      if (state.filterQueries.length === 0) {
        filterQueriesCopy.push(filterValue);
      } else if (state.filterQueries.length >= 1) {
        const filterQueriesJSON = state.filterQueries.map(filter =>
          JSON.stringify(filter)
        );
        if (filterQueriesJSON.includes(JSON.stringify(filterValue)) === false) {
          filterQueriesCopy.push(filterValue);
        }
      }
      return { ...state, filterQueries: filterQueriesCopy };
    }
    case 'HANDLE_FILTER_SUCCESS': {
      if (typeof action.payload === 'string') {
        return {
          ...state,
          isLoading: false,
          selectedAll: false,
          isFilterQueriesEmpty: !state.isFilterQueriesEmpty
        };
      }
      const searchResultCopy = action.payload.results.map(val => {
        val.checked = false;
        return val;
      });

      return {
        ...state,
        isLoading: false,
        selectedAll: false,
        searchResultCopy: searchResultCopy
      };
    }
    case 'HANDLE_REMOVE_CHIP': {
      const filterQueries = [...state.filterQueries];
      filterQueries.splice(action.payload, 1);
      return {
        ...state,
        filterQueries: filterQueries,
        isFilterQueriesEmpty: false
      };
    }
    case 'HANDLE_REMOVE_CHIP_SUCCESS': {
      const searchResultCopy = action.payload.results.map(val => {
        val.checked = false;
        return val;
      });

      return {
        ...state,
        isLoading: false,
        selectedAll: false,
        searchResultCopy: searchResultCopy
      };
    }
    case 'HANDLE_SEARCH_CLICK': {
      return {
        ...state,
        isSearchClicked: true
      };
    }
    case 'HANDLE_SEARCH_CLOSE': {
      return {
        ...state,
        isSearchClosed: true
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
