// ideally, would like to have methods that all ducks will need here

// takes in requests data from api results and returns parseable data
export const transformRequests = requests => {
  return requests.map(request => {
    const reqData = JSON.parse(request.requestdata);
    return {
      ...request,
      name: `${request.requestaction} ${request.requesttype}: ${reqData.sensitivity}`,
      requestdata: reqData,
      description: reqData.description || '',
      requeststatus:
        request.requeststatus.charAt(0).toUpperCase() +
        request.requeststatus.slice(1)
    };
  });
};
