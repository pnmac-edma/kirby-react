import React from 'react';
import { WarningRounded } from '@material-ui/icons';
import store from '../setupStore';
import aws4 from 'aws4';

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
 * TODO: add typing for this function and get rid of the notes below
 * url: the base url of the API (pulled from the config)
 * path: the specific path to be appended to the host (e.g. /users/requests)
 * method: HTTP Method
 * optionalConfig: {
 *  data: the body of the request
 *  headers: any headers if needed
 *  params: any query paramters the request needs
 * }
 */
export const constructRequest = (url, path, method, optionalConfig = {}) => {
  const { data, headers, params } = optionalConfig;
  const { AccessKeyId, SecretKey, SessionToken } = store.getState().currentUser;

  // grabs the substring of url after https://
  const hostname = url.split('https://')[1];

  // converts params object to a query string
  const queryString = params
    ? `/?${new URLSearchParams(params).toString()}`
    : '';

  const request = {
    method,
    host: hostname,
    path: `${path}${queryString}`,
    url: `${url}${path}${queryString}`
  };

  if (data) {
    request.data = { ...data }; // body parameter needed for aws
    request.body = JSON.stringify({ ...request.data }); // data parameter needed for axios
  }

  if (headers) {
    request.headers = { ...headers };
  }

  /*
   * PACKAGE SIGNING WITH AWS4 MODULE
   * refer to: https://github.com/mhart/aws4#readme
   */
  const signedRequest = aws4.sign(request, {
    secretAccessKey: SecretKey,
    accessKeyId: AccessKeyId,
    sessionToken: SessionToken
  });

  // delete unsafe headers added by aws4
  delete signedRequest.headers['Host'];
  delete signedRequest.headers['Content-Length'];
  return request;
};

// maps sensitivity property from data to the proper icon and text
export const generateSensitivity = sensitivity => {
  if (sensitivity === 'sensitive') {
    return (
      <div className="sensitivity">
        <WarningRounded className="sensitivity-sensitive" />
        Sensitive
      </div>
    );
  }
  if (sensitivity === 'confidential') {
    return (
      <div className="sensitivity">
        <WarningRounded color="error" />; Confidential
      </div>
    );
  }
  if (sensitivity === 'non-sensitive') {
    return <div className="sensitivity">Not Sensitive</div>;
  }
  return null;
};
