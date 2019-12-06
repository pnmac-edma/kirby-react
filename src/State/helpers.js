// ideally, would like to have methods that all ducks will need here

// takes in requests data from api results and returns parseable data
export const transformRequests = (requests, role) => {
  return requests.map(request => {
    const reqData = JSON.parse(request.requestdata);
    switch (role) {
      case role.governance === true: {
        return {
          ...request,
          databasename: request.databasename || '', // placeholder for name property
          requestdata: reqData,
          description: reqData.description || '',
          requeststatus:
            request.govstatus.chatAt(0).toUpperCase() +
            request.govstatus.slice(1)
        };
      }
      case role.approver === true: {
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
      default:
        return { ...request };
    }
  });
};
