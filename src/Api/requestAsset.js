import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const getEmployees = args => {
  const url = `https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev`;

  let request = constructRequest(url, 'GET', '/users', null, null);

  console.log(request);

  return axios(request)
    .then(response => response.data.users)
    .then(error => error);
};
