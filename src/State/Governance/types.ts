// action constant types
export const SET_REMOVE_SELECTED_ROW = 'SET_REMOVE_SELECTED_ROW';
export const SET_REMOVE_GOVERNOR = 'SET_REMOVE_GOVERNOR';
export const SET_REMOVE_SENSITIVITY_LEVELS = 'SET_REMOVE_SENSITIVITY_LEVELS';
export const SET_REMOVE_DOMAIN_MANAGERS = 'SET_REMOVE_DOMAIN_MANAGER';

// DOMAIN_OWNERS FETCH
export const DOMAIN_OWNERS_REQUEST_FETCH = 'DOMAIN_OWNERS_REQUEST_FETCH';
export const DOMAIN_OWNERS_REQUEST_SUCCESS = 'DOMAIN_OWNERS_REQUEST_SUCCESS';
export const DOMAIN_OWNERS_REQUEST_FAILURE = 'DOMAIN_OWNERS_REQUEST_FAILURE';
// DOMAIN_OWNERS DELETE
export const DELETE_DOMAIN_OWNERS_REQUEST_FETCH =
  'DELETE_DOMAIN_OWNERS_REQUEST_FETCH';
export const DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS =
  'DELETE_DOMAIN_OWNERS_REQUEST_SUCCESS';
export const DELETE_DOMAIN_OWNERS_REQUEST_FAILURE =
  'DELETE_DOMAIN_OWNERS_REQUEST_FAILURE';
// SENSITIVITY LEVELS FETCH
export const SENSITIVITY_LEVELS_REQUEST_FETCH =
  'SENSITIVITY_LEVELS_REQUEST_FETCH';
export const SENSITIVITY_LEVELS_REQUEST_SUCCESS =
  'SENSITIVITY_LEVELS_REQUEST_SUCCESS';
export const SENSITIVITY_LEVELS_REQUEST_FAILURE =
  'SENSITIVITY_LEVELS_REQUEST_FAILURE';
// SENSITIVITY LEVELS FETCH
export const GOVERNORS_REQUEST_FETCH = 'GOVERNORS_REQUEST_FETCH';
export const GOVERNORS_REQUEST_SUCCESS = 'GOVERNORS_REQUEST_SUCCESS';
export const GOVERNORS_REQUEST_FAILURE = 'GOVERNORS_REQUEST_FAILURE';

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
/**
 * Sensitivity Levels API structure
 */
export interface SensitivityLevelsResponse {
  data: SensitivityLevel;
}
export interface SensitivityLevel {
  Id: number;
  createddate: string;
  createdbyemail: string;
  sensitivity: string;
}
/**
 * Governors API structure
 */
export interface GovernorsResponse {
  data: Governor;
}
export interface Governor {
  Id: number;
  createddate: string;
  createdbyemail: string;
  username: string;
  useremail: string;
}
