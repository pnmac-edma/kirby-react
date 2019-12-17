import * as types from './types';

export const requestAssetsClick = obj => ({
  type: types.REQUEST_ASSETS_CLICK,
  payload: obj
});

export const requestCheckBoxSelect = ({ target }) => ({
  type: types.REQUEST_CHECKBOX_SELECT,
  payload: { id: target.id, checked: target.checked }
});

export const getEmployeesFetch = () => ({
  type: types.GET_EMPLOYEES_FETCH
});

export const handleSelectedEmployees = selectedValues => ({
  type: types.HANDLE_SELECTED_EMPLOYEES,
  payload: selectedValues
});

export const handleModalToggle = () => ({
  type: types.HANDLE_MODAL_TOGGLE
});

export const handleRemoveSelected = obj => ({
  type: types.HANDLE_REMOVE_SELECTED,
  payload: obj
});

export const justificationHandleInput = e => ({
  type: types.JUSTIFICATION_HANDLE_INPUT,
  payload: e.target.value
});
