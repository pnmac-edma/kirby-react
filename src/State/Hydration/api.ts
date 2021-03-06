import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';

export const getSourceTiles = () => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/data`,
    HttpMethods.GET,
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
    HttpMethods.GET,
    {
      params: { dropdown: 'sensitivity' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const getDestinationsDropdown = () => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/data`,
    HttpMethods.GET,
    {
      // TODO need to update with user select
      params: { dropdown: 'databases', sensitivity: 'non-sensitive' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const newDestination = (
  name: string,
  sensitivity: string,
  domain: string,
  description: string,
  justification: string,
  createdbyemail: string
) => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/requests/databases`,
    HttpMethods.POST,
    {
      data: {
        createdbyemail,
        databasename: name,
        domain,
        description,
        justification,
        sensitivity
      },
      headers: { 'Content-Type': 'application/json' }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const databaseCheck = (name: any) => {
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/assets/databases/check`,
    HttpMethods.GET,
    {
      params: { name }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
