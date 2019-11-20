import axios from 'axios';

export const requestInboxAlertApiCall = () => {
  const url = `https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev/governance`;
  const fetchBody = {
    function: 'get_pending',
    params: {}
  };
  return axios
    .post(url, fetchBody)
    .then(response => response.data)
    .then(error => error);
};
