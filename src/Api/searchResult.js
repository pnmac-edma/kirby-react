import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const searchResultApiCall = (...args) => {
  // TODO: Pull base url from the env config object once implemented
  const BASE_URL = 'https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev';

  // to test signing (once implemented), Jon created this url that requires signing to access
  // const BASE_URL = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';
  const searchTerm = args[0] || '';
  const filterQueries = args[2] ? undefined : args[1];
  const sortBy = args[2] ? [{ [args[1]]: args[2].payload }] : undefined;

  const requestBody = {
    requestedbyemail: 'selcuk.ates@pnmac.com',
    search_term: searchTerm,
    sort_by: sortBy,
    filters: filterQueries
  };

  const request = constructRequest(
    BASE_URL,
    'POST',
    '/assets/search',
    null,
    requestBody
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
