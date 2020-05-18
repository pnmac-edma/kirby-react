// Get Domain API
export const GET_DOMAINS_REQUEST_FETCH = 'GET_DOMAINS_REQUEST_FETCH';
export const GET_DOMAINS_REQUEST_SUCCESS = 'GET_DOMAINS_REQUEST_SUCCESS';
export const GET_DOMAINS_REQUEST_FAILURE = 'GET_DOMAINS_REQUEST_FAILURE';
// SELECTED DOMAINS
export const SET_SELECTED_DOMAIN_VALUES = 'SET_SELECTED_DOMAINS_VALUES';

export interface GetDomainsResponse {
  data: GetDomains;
}

export interface GetDomains {
  Id: number;
  createddate: string;
  createdbyemail: string;
  domain: string;
  owneremail: string;
}
