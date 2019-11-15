import axios from 'axios';

export const searchResultApiCall = (...args) => {
  const url = `https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev/assets`;
  const searchTerm = args[0] || '';
  const filterQueries = args[2] ? undefined : args[1];
  const sortBy = args[2] ? [{ [args[1]]: args[2].payload }] : undefined;
  const fetchBody = {
    function: 'search',
    params: {
      requestedbyemail: 'selcuk.ates@pnmac.com',
      search_term: searchTerm,
      sort_by: sortBy,
      filters: filterQueries
    }
  };
  return axios
    .post(url, fetchBody)
    .then(response => response.data)
    .then(error => error);
};
