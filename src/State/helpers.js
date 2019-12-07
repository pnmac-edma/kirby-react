// ideally, would like to have methods that all ducks will need here
import aws4 from 'aws4';
import store from '../setupStore';

// takes in requests data from api results and returns parseable data
export const transformRequests = requests => {
  return requests.map(request => {
    const reqData = JSON.parse(request.requestdata);
    return {
      ...request,
      databasename: request.databasename || '', // placeholder for name property
      requestdata: reqData,
      description: reqData.description || '',
      requeststatus:
        request.requeststatus.charAt(0).toUpperCase() +
        request.requeststatus.slice(1)
    };
  });
};

// take in a API request object, and signs it
export const signApiCall = request => {
  const { AccessKeyId, SecretKey, SessionToken } = store.getState().currentUser;

  let signedRequest = aws4.sign(request, {
    accessKeyId: AccessKeyId,
    secretAccessKey: SecretKey,
    sessionToken: SessionToken
  });

  // axios screams at you if you don't delete these
  delete signedRequest.headers['Host'];
  delete signedRequest.headers['Content-Length'];

  console.log(signedRequest);

  return signedRequest;
};
