import * as types from './types';

export const requestAssetsClick = obj => ({
  type: types.REQUEST_ASSETS_CLICK,
  payload: obj
});

export const requestCheckBoxSelect = e => ({
  type: types.REQUEST_CHECKBOX_SELECT,
  payload: e.target
});

export const getEmployeesFetch = () => ({
  type: types.GET_EMPLOYEES_FETCH
});

export const handleSelectedEmployees = selectedValues => ({
  type: types.HANDLE_SELECTED_EMPLOYEES,
  payload: selectedValues
});
