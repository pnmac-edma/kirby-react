import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';

export const getSourceTiles = () => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/data`,
    'GET',
    {
      params: { dropdown: 'sourcetypes' }
    }
  );
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const getDestinations = () => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/data`,
    'GET',
    {
      params: { dropdown: 'sensitivity' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
