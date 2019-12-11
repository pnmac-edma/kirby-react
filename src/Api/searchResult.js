import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const searchResultApiCall = (...args) => {
  // TODO: Pull url from env config once implemented
  // const url = `https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev`;

  const url = 'https://vtc55uxuy5.execute-api.us-west-2.amazonaws.com/dev';
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
    url,
    'POST',
    '/assets/search',
    null,
    requestBody
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
