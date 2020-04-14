import axios from 'axios';
import { constructRequest } from '../State/helpers';
import config from '../config/config';
import { HttpMethods } from '../Models/enums';

export const getEmployees = args => {
  // to test signing (once implemented), Jon created this url that requires signing to access
  // const BASE_URL = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users`,
    HttpMethods.GET,
    {
      params: {}
    }
  );

  return axios(request)
    .then(response => response.data.users)
    .then(error => error);
};

export const makeRequest = (
  createdbyemail,
  assets,
  justification,
  requestedfor
) => {
  const fetchBody = {
    createdbyemail,
    assets,
    justification,
    requestedfor
  };

  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/assets/requests/access`,
    HttpMethods.POST,
    {
      data: fetchBody,
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
