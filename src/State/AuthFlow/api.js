import axios from 'axios';

const COGNITO_URL =
  'https://pennymac.onelogin.com/trust/saml2/http-post/sso/877995';

export function authenticate(token) {
  const fetchBody = {
    token: JSON.stringify(token)
  };
  return axios
    .post(`${COGNITO_URL}/authenticate`, fetchBody)
    .then(response => {
      return response.data;
    })
    .then(error => error);
}
