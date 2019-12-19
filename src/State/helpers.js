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

/* constructs a request object to be passed to axios
 * url: the base url of the API (pulled from the config in most ways)
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

  console.log(request);

  /* NOTE:
   * Adding these headers violates CORS policies!
   * For now, this will be commented out, but once
   * we are able to get signing implemented correctly
   * this can be implemented
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

  // TODO: Implement aws4 signing
  // let signedRequest = signApiCall(request, {AccessKeyId, SecretKey, SessionToken});

  return request;
};

// TODO: implement signing. The aws4 package is not signing correctly
// so signing will have to be done manually
// const signApiCall = request = credentials => {
//   const { AccessKeyId, SecretKey, SessionToken } = credentials;

//   if (AccessKeyId && SecretKey && SessionToken) {
//     aws4.sign(request, {
//       accessKeyId: AccessKeyId,
//       secretAccessKey: SecretKey,
//       sessionToken: SessionToken
//     });

//     delete request.headers['Host'];
//     delete request.headers['Content-Length'];
//   }
//   console.log(request);
//
//   return request;
// };
