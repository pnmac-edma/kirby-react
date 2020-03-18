import axios from 'axios';
import { constructRequest } from '../helpers';
import config from '../../config/config';

// TODO: load from the env config once implemented
// NOTE: authenicate still uses the older API. Do not change
// const BASE_URL = 'https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev';

export function authenticate(token) {
  const requestBody = {
    token: 'SAMLResponse=' + token
  };

  const request = constructRequest(
    config.authUrl, // url
    config.authPath, // authenticationPath
    'POST', // method
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
