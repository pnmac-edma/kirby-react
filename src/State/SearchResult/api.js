import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import store from '../../setupStore';
import { HttpMethods } from '../../Models/enums';

export const searchResultApiCall = (...args) => {
  // to test signing (once implemented), Jon created this url that requires signing to access
  // const BASE_URL = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';
  const searchTerm = args[0] || '';
  const { EmpEmail } = store.getState().currentUser;
  // TODO Need to syncup with backend
  // const filterQueries = args[2] ? undefined : args[1];
  // const sortBy = args[2] ? [{ [args[1]]: args[2].payload }] : undefined;

  const requestBody = {
    requestedbyemail: EmpEmail,
    search_term: searchTerm
    // sort_by: sortBy,
    // filters: filterQueries
  };

  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/assets/search`,
    HttpMethods.POST,
    {
      data: requestBody,
      headers: { 'Content-Type': 'application/json' }
    }
  );
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
