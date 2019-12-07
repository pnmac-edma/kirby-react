import axios from 'axios';

export const getEmployees = args => {
  const url = `https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev/users`;
  const fetchBody = {
    function: 'get_users',
    params: {}
  };
  return axios.post(url, fetchBody).then(response => response.data.users);
};

export const makeRequest = (requestAssets, justification, requestedFor) => {
  const url = `https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev/assets/requests/access/`;
  const fetchBody = {
    createdbyemail: 'selcuk.ates@pnmac.com',
    requestedfor: requestedFor,
    assets: requestAssets,
    justification: justification
  };
  return axios.post(url, fetchBody).then(response => response.data);
};
