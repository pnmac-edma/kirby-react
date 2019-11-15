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
    default:
      return state;
  }
};

export default requestAssetsReducers;
