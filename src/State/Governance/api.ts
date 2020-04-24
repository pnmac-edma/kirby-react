import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';

export const getDomainOwners = () => {
  const request = constructRequest(
    `https://tx9n6nw9ye.execute-api.us-west-2.amazonaws.com/dev`,
    `${config.apiPath}/governance/owners/`,
    HttpMethods.GET,
    {}
  );
  console.log(666, request);
  return axios(request)
    .then(response => response.data)
    .then(error => error);
};

export const getSensitivityLevels = () => {
  const request = constructRequest(
    `https://tx9n6nw9ye.execute-api.us-west-2.amazonaws.com/dev`,
    `${config.apiPath}/governance/sensitivityLevels/`,
    HttpMethods.GET,
    {}
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
};
