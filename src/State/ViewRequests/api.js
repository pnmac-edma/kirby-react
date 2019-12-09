// All API calls that have to do with viewing requests
import axios from 'axios';
import { constructRequest } from '../helpers';

// TODO: Pull base url from the env config object once implemented
const BASE_URL = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev';

export function getUserRequests(createdbyemail) {
  let request = constructRequest(
    BASE_URL,
    'GET',
    '/users/requests',
    { createdbyemail },
    null
  );
  return axios(request)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}

export function getApproverRequests(approveremail) {
  let request = constructRequest(
    BASE_URL,
    'GET',
    '/approver/requests',
    { approveremail },
    null
  );
  return axios(request)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}

export function getGovernanceRequests(pages, size, status = '') {
  let request = constructRequest(
    BASE_URL,
    'GET',
    '/governance/requests',
    { pages, size, status },
    null
  );
  return axios(request)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}
