import axios from 'axios';

const COGNITO_URL =
  'https://e6b8r4dht6.execute-api.us-west-2.amazonaws.com/dev';

export function authenticate(token) {
  const fetchBody = {
    token: 'SAMLResponse=' + token,
    AccessKeyID: null,
    EmpEmail: null,
    UserKey: null,
    SessionToken: null,
    SamlHash: null,
    SecretKey: null
  };
  return axios
    .post(`${COGNITO_URL}/authenticate`, fetchBody)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}
