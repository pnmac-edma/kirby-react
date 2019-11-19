import * as types from './types';

export const requestAssetsClick = obj => ({
  type: types.REQUEST_ASSETS_CLICK,
  payload: obj
});

export const requestCheckBoxSelect = e => ({
  type: types.REQUEST_CHECKBOX_SELECT,
  payload: e.target
});

export const employeeAssetsRequest = () => ({
  type: types.EMPLOYEE_ASSETS_REQUEST
});

export const requestSelectValues = selectedValues => ({
  type: types.REQUEST_SELECT_VALUES,
  payload: selectedValues
});
