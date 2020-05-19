import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';
import * as types from './types';
import store from '../../setupStore';

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

export const deleteDomainOwners = (id_: Number): Promise<void> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/owners/`,
    HttpMethods.DELETE,
    {
      params: { id_ }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const addDomainOwners = (
  domain: string,
  createdbyemail: string,
  owneremail: string
): Promise<void> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/owners`,
    HttpMethods.POST,
    {
      data: { domain, createdbyemail, owneremail },
      headers: { 'Content-Type': 'application/json' }
    }
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

export const deleteSensitivityLevels = (): Promise<void> => {
  const { setSelectedRemoveRowId } = store.getState().governance;
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/sensitivity`,
    HttpMethods.DELETE,
    {
      params: { id_: setSelectedRemoveRowId }
    }
  );
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const addSensitivityLevels = (
  sensitivity: string,
  createdbyemail: string,
  description: string
): Promise<void> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/sensitivity`,
    HttpMethods.POST,
    {
      data: { sensitivity, createdbyemail, description },
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const getGovernors = (): Promise<types.GovernorsResponse> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/users`,
    HttpMethods.GET,
    {}
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const deleteGovernors = (id_: Number): Promise<void> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/users`,
    HttpMethods.DELETE,
    {
      params: { id_ }
    }
  );
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const addGovernors = (
  useremail: string,
  createdbyemail: string
): Promise<void> => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/governance/users`,
    HttpMethods.POST,
    {
      data: { useremail, createdbyemail },
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
