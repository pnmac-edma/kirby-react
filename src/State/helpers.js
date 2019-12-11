// ideally, would like to have methods that all ducks will need here
import aws4 from 'aws4';
import store from '../setupStore';

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

/* constructs a request config, then passing that to aws4 to sign
 * host: the base url of the API
 * method: the HTTP method of the request
 * path: the specific path to be appended to the host (e.g. /users/requests)
 * params: any query paramters the request needs. Pass in null if there is no query string parameters
 * data: the body of the request. Pass in null if there is no body
 */
export const constructRequest = (url, method, path, params, data) => {
  const {
    AccessKeyId,
    EmpEmail,
    SamlHash,
    SecretKey,
    SessionToken,
    UserKey
  } = store.getState().currentUser;

  let userSession = {
    AccessKeyId,
    EmpEmail,
    SamlHash,
    SecretKey,
    SessionToken,
    UserKey
  };
  // regex to match on a hostname
  // eslint-disable-next-line
  let hostRegex = new RegExp(/([(\w(\-?)\.]+)com/g);

  let hostname = hostRegex.exec(url)[0];
  // construct request
  let request = {
    host: hostname,
    method,
    url: `${url}${path}`,
    path,
    data: { ...userSession }, // data paramter needed for axios
    body: JSON.stringify({ ...userSession }) // body parameter needed for aws
  };
  /* NOTE:
   * Adding these headers violates CORS policies!
   * For now, this will be commented out, but once the API
   * is refactored to allow these headers, not pass these
   * through the body of the request, this can be uncommented
   */

  // request.headers["AccessKeyId"] = AccessKeyId;
  // request.headers["EmpEmail"] = EmpEmail;
  // request.headers["SamlHash"] = SamlHash;
  // request.headers["SecretKey"] = SecretKey;
  // request.headers["SessionToken"] = SessionToken;
  // request.headers["UserKey"] = UserKey;

  // add params if needed
  if (params) {
    request.params = params;
  }

  // tack on additional data if needed
  if (data) {
    request.data = { ...request.data, ...data };
    request.body = JSON.stringify(request.data);
  }

  // sign the API call
  let signedRequest = signApiCall(request);

  return signedRequest;
};
// take in a API request object, and signs i
const signApiCall = request => {
  const { AccessKeyId, SecretKey, SessionToken } = store.getState().currentUser;

  if (AccessKeyId && SecretKey && SessionToken) {
    delete request.headers['Content-Length'];
    let signedRequest = aws4.sign(request, {
      accessKeyId: AccessKeyId,
      secretAccessKey: SecretKey,
      sessionToken: SessionToken
    });

    delete signedRequest.headers['Host'];

    console.log(signedRequest);
    return signedRequest;
  }
  return request;
};
