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

export const handleModalOpen = () => ({
  type: types.HANDLE_MODAL_OPEN
});

export const handleModalClose = obj => ({
  type: types.HANDLE_MODAL_CLOSE,
  payload: obj
});

export const handleRemoveNotification = () => ({
  type: types.HANDLE_REMOVE_NOTIFICATION
});
