import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';

export const getEmployees = () => {
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
  createdbyemail: any,
  assets: any,
  justification: any,
  requestedfor: any
) => {
  const fetchBody = {
    createdbyemail,
    assets,
    justification,
    requestedfor
  };
  console.log('API ', assets);
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/assets/access`,
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
