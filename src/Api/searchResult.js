import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const searchResultApiCall = (...args) => {
  const url = `https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev`;
  const searchTerm = args[0] || '';
  const filterQueries = args[2] ? undefined : args[1];
  const sortBy = args[2] ? [{ [args[1]]: args[2].payload }] : undefined;

  const requestBody = {
    function: 'search',
    params: {
      requestedbyemail: 'selcuk.ates@pnmac.com',
      search_term: searchTerm,
      sort_by: sortBy,
      filters: filterQueries
    }
  };

  let request = constructRequest(url, 'POST', '/assets', null, requestBody);

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
