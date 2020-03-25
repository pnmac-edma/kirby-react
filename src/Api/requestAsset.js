import axios from 'axios';
import { constructRequest } from '../State/helpers';
import store from '../setupStore';

export const getEmployees = args => {
  // TODO: Pull base url from the env config object once implemented
  const BASE_URL = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev';

  // to test signing (once implemented), Jon created this url that requires signing to access
  // const BASE_URL = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';

  const request = constructRequest(BASE_URL, 'GET', '/users', null, null);

  return axios(request)
    .then(response => response.data.users)
    .then(error => error);
};

export const makeRequest = (requestAssets, justification, requestedFor) => {
  const { EmpEmail } = store.getState().currentUser;
  const url = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev';
  const fetchBody = {
    // TODO needs update from currentUser auth. have aticket already
    createdbyemail: EmpEmail,
    requestedfor: requestedFor,
    assets: requestAssets,
    justification: justification
  };
  return axios
    .post(`${url}/assets/requests/access/`, fetchBody)
    .then(response => response.data);
};
