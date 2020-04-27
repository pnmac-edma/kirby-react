// action constant types
export const SET_REMOVE_SELECTED_ROW = 'SET_REMOVE_SELECTED_ROW';
export const SET_REMOVE_GOVERNOR = 'SET_REMOVE_GOVERNOR';
export const SET_REMOVE_SENSITIVITY_LEVELS = 'SET_REMOVE_SENSITIVITY_LEVELS';
export const SET_REMOVE_DOMAIN_MANAGERS = 'SET_REMOVE_DOMAIN_MANAGER';

// DOMAIN_OWNERS FETCH
export const DOMAIN_OWNERS_REQUEST_FETCH = 'DOMAIN_OWNERS_REQUEST_FETCH';
export const DOMAIN_OWNERS_REQUEST_SUCCESS = 'DOMAIN_OWNERS_REQUEST_SUCCESS';
export const DOMAIN_OWNERS_REQUEST_FAILURE = 'DOMAIN_OWNERS_REQUEST_FAILURE';

/**
 * Domain Owners API structure
 */
export interface DomainOwnersResponse {
  data: DomainOwners;
}
export interface DomainOwners {
  Id: number;
  createddate: string;
  createdbyemail: string;
  domain: string;
  owneremail: string;
}
