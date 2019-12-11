// ideally, would like to have methods that all ducks will need here

// takes in requests data from api results and returns parseable data
export const transformRequests = (requests, role) => {
  return requests.map(request => {
    const reqData = JSON.parse(request.requestdata);

    if (role.governance) {
      return {
        ...request,
        databasename: request.databasename || '', // placeholder for name property
        requestdata: reqData,
        description: reqData.description || ''
      };
    } else {
      return {
        ...request,
        databasename: request.databasename || '', // placeholder for name property
        requestdata: reqData,
        description: reqData.description || '',
        requeststatus:
          request.requeststatus.charAt(0).toUpperCase() +
          request.requeststatus.slice(1)
      };
    }
  });
};

// Attempts to load in the state from session storage if it's there
// (https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
export const loadState = () => {
  try {
    const sessionState = sessionStorage.getItem('kirbyState');
    return sessionState !== null ? JSON.parse(sessionState) : undefined;
  } catch (error) {
    return undefined;
  }
};

// Persists the state to session storage to avoid losing it on refresh
export const saveState = state => {
  try {
    const sessionState = JSON.stringify(state);
    sessionStorage.setItem('kirbyState', sessionState);
  } catch (error) {
    // Prevents a crash, but state save failures are not critical to handle further
  }
};
