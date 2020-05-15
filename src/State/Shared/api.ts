import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';
import * as types from './types';

export const getDomains = (): Promise<types.GetDomainsResponse> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/data/`,
    HttpMethods.GET,
    {
      params: { domain: 'domains' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
