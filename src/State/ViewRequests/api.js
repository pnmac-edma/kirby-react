// All API calls that have to do with viewing requests
import axios from 'axios';
import { signApiCall } from '../helpers';

const BASE_URL = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com';

export function getUserRequests(createdbyemail) {
  let request = {
    host: BASE_URL.slice(8), // host doesn't include https://
    method: 'GET',
    url: `${BASE_URL}/dev/users/requests`,
    path: '/dev/users/requests',
    params: {
      createdbyemail
    }
  };

  let signedRequest = signApiCall(request);

  return axios(signedRequest)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}

export function getApproverRequests(approveremail) {
  let request = {
    host: BASE_URL.slice(8),
    method: 'GET',
    url: `${BASE_URL}/dev/approver/requests`,
    path: '/dev/approver/requests',
    params: {
      approveremail
    }
  };

  let signedRequest = signApiCall(request);

  return axios(signedRequest)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}

export function getGovernanceRequests(pages, size, status = '') {
  let request = {
    host: BASE_URL.slice(8),
    method: 'GET',
    url: `${BASE_URL}/dev/governance/requests`,
    path: '/dev/governance/requests',
    params: {
      pages,
      size,
      status
    }
  };

  let signedRequest = signApiCall(request);

  return axios(signedRequest)
    .then(response => {
      return response.data;
    })
    .catch(error => error);
}
