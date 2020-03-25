import axios from 'axios';
import { constructRequest } from '../State/helpers';
import config from '../config/config';

export const searchResultApiCall = (...args) => {
  // to test signing (once implemented), Jon created this url that requires signing to access
  // const BASE_URL = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';
  const searchTerm = args[0] || '';
  const filterQueries = args[2] ? undefined : args[1];
  const sortBy = args[2] ? [{ [args[1]]: args[2].payload }] : undefined;

  const requestBody = {
    requestedbyemail: 'selcuk.ates@pnmac.com',
    search_term: searchTerm
    // sort_by: sortBy,
    // filters: filterQueries
  };

  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/assets/search`,
    'POST',
    {
      params: requestBody
    }
  );
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
