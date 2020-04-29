import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';
import * as types from './types';

export const getDomainOwners = (): Promise<types.DomainOwnersResponse> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/owners/`,
    HttpMethods.GET,
    {}
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const getSensitivityLevels = (): Promise<types.SensitivityLevelsResponse> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/sensitivity/`,
    HttpMethods.GET,
    {}
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
