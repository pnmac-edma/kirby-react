// All API calls that have to do with viewing requests
import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';

export function getUserRequests(createdbyemail) {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/requests`,
    'GET',
    {
      params: { createdbyemail }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}

export function getApproverRequests(approveremail) {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/approver/requests`,
    'GET',
    {
      params: { approveremail }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}

export function getGovernanceRequests(pages, size, status) {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/requests`,
    'GET',
    {
      params: { useremail: 'eric.barrow@pnmac.com' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}
