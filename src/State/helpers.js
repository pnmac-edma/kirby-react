// ideally, would like to have methods that all ducks will need here

// takes in requests data from api results and returns parseable data
export const transformRequests = requests => {
  return requests.map(request => {
    const reqData = JSON.parse(request.requestdata);
    return {
      ...request,
      databasename: request.databasename || '',
      requestdata: reqData,
      description: reqData.description || ''
    };
  });
};
