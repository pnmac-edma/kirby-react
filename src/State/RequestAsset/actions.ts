import * as types from './types';

export const requestAssetsClick = (selected: any, data: any) => ({
  type: types.REQUEST_ASSETS_CLICK,
  selected,
  data
});

export const requestCheckBoxSelect = ({ target }: any) => ({
  type: types.REQUEST_CHECKBOX_SELECT,
  payload: { id: target.id, checked: target.checked }
});

export const getEmployeesFetch = () => ({
  type: types.GET_EMPLOYEES_FETCH
});

export const handleSelectedEmployees = (selectedValues: any) => ({
  type: types.HANDLE_SELECTED_EMPLOYEES,
  payload: selectedValues
});

export const handleModalToggle = () => ({
  type: types.HANDLE_MODAL_TOGGLE
});

export const handleRemoveSelected = (obj: any) => ({
  type: types.HANDLE_REMOVE_SELECTED,
  payload: obj
});

export const justificationHandleInput = (e: { target: { value: any } }) => ({
  type: types.JUSTIFICATION_HANDLE_INPUT,
  payload: e.target.value
});

export const makeRequestsFetch = () => ({
  type: types.MAKE_REQUESTS_FETCH
});

export const setToggleAssetCheckbox = (selected: any, id: any) => ({
  type: types.SET_TOGGLE_ASSET_CHECKBOX,
  selected,
  id
});

export const setToggleAssetAllCheckbox = (selected: any, data: any) => ({
  type: types.SET_TOGGLE_ASSET_ALL_CHECKBOX,
  selected,
  data
});
