// All API calls that have to do with viewing requests
import axios from 'axios';

const BASE_URL = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev';

export function getUserRequests(createdbyemail) {
  const fetchBody = {
    params: {
      createdbyemail
    }
  };
  return axios
    .get(`${BASE_URL}/users/requests`, fetchBody)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}

export function getApproverRequests(approveremail) {
  const fetchBody = {
    params: {
      approveremail
    }
  };
  return axios
    .get(`${BASE_URL}/approver/requests`, fetchBody)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}

export function getGovernanceRequests(pages, size, status = '') {
  const fetchBody = {
    params: {
      pages,
      size,
      status
    }
  };
  return axios
    .get(`${BASE_URL}/governance/requests`, fetchBody)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}
