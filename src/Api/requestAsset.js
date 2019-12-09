import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const getEmployees = args => {
  const url = `https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev`;

  let requestBody = {
    function: 'get_users',
    params: {}
  };

  let request = constructRequest(url, 'POST', '/users', null, requestBody);

  return axios(request)
    .then(response => response.data.users)
    .then(error => error);
};
