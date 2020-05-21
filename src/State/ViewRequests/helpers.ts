export const generateRequestTypeString = (reqs: Array<any>, id: number) => {
  const currentRequest = reqs.find((request: any) => request.Id === id);

  // TODO: the request type values might change in the api so
  //       these values might need changing
  if (currentRequest.requesttype === 'Access') {
    return 'access-database';
  } else if (currentRequest.requesttype === 'Database') {
    return 'add-database';
  } else if (currentRequest.requesttype === 'Job') {
    return 'new-job';
  }
};
