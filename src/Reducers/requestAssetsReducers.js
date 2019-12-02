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
    case 'GET_EMPLOYEES_FETCH': {
      return { ...state };
    }
    case 'GET_EMPLOYEES_SUCCESS': {
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
    case 'GET_EMPLOYEES_FAILURE': {
      return { ...state, employees: action.payload };
    }
    case 'HANDLE_SELECTED_EMPLOYEES': {
      return { ...state, selectedEmployees: action.payload };
    }
    case 'HANDLE_MODAL_OPEN': {
      return { ...state, openModal: !state.openModal };
    }
    case 'HANDLE_MODAL_CLOSE': {
      const searchResultCopy = state.selectedSearchResultCopy.reduce(
        (acc, value) => {
          if (!value.chec) acc.push(value);
          return acc;
        },
        []
      );
      return {
        ...state,
        selectedSearchResultCopy: searchResultCopy,
        openModal: !state.openModal,
        notification: !state.notification
      };
    }
    case 'HANDLE_REMOVE_NOTIFICATION': {
      return { ...state, notification: !state.notification };
    }
    default:
      return state;
  }
};

export default requestAssetsReducers;
