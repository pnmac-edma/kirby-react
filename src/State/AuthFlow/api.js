import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';
import { HttpMethods } from '../../Models/enums';
import store from '../../setupStore';

export function authenticate(token) {
  const requestBody = {
    token: 'SAMLResponse=' + token
  };

  const request = constructRequest(
    config.authUrl, // url
    config.authPath, // authenticationPath
    HttpMethods.POST, // method
    {
      data: requestBody // the body of request
    }
  );

  return axios(request)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}

export function postUserEvaluate() {
  const currentUserEmail = store.getState().currentUser.EmpEmail;
  const request = constructRequest(
    config.apiUrl,
    `${config.apiPath}/users/evaluate`,
    HttpMethods.POST,
    {
      params: { email: currentUserEmail }
    }
  );

  return axios(request)
    .then(response => response.data)
    .then(error => error);
}
