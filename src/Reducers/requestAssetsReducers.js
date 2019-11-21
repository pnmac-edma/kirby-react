import initialState from './initialState';

const requestAssetsReducers = (state = initialState.requestAssets, action) => {
  switch (action.type) {
    case 'REQUEST_ASSETS_CLICK': {
      const searchResultCopy = action.payload.map(value => {
        value.chec = false;
        return value;
      });
      return { ...state, selectedSearchResultCopy: searchResultCopy };
    }
    case 'REQUEST_CHECKBOX_SELECT': {
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
    case 'EMPLOYEE_ASSETS_REQUEST': {
      return { ...state };
    }
    case 'EMPLOYEE_ASSETS_SUCCESS': {
      const requestedFor = action.payload.reduce((acc, user) => {
        acc.push({
          value: user.displayname,
          label: user.displayname,
          email: user.email
        });
        return acc;
      }, []);
      return { ...state, requestedFor: requestedFor };
    }
    case 'EMPLOYEE_ASSETS_FAILURE': {
      return { ...state, requestedFor: ['Server Error'] };
    }
    case 'REQUEST_SELECT_VALUES': {
      return { ...state, selectedOption: action.payload };
    }

    default:
      return state;
  }
};

export default requestAssetsReducers;
