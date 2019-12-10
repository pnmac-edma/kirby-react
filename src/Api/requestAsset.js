import axios from 'axios';
import { constructRequest } from '../State/helpers';

export const getEmployees = args => {
  // TODO: pull url from env config once implemented
  const url = `https://j8nhpla4d3.execute-api.us-west-2.amazonaws.com/dev`;

  const request = constructRequest(url, 'GET', '/users', null, null);

  return axios(request)
    .then(response => response.data.users)
    .then(error => error);
};
