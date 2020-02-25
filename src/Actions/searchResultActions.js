import * as types from './types';

export const searchResultPageLoad = params => ({
  type: types.SEARCH_RESULT_PAGE_LOAD,
  payload: params
});

export const searchHandleInput = e => ({
  type: types.SEARCH_HANDLE_INPUT,
  payload: e.target.value
});

export const handleKeyPress = e => ({
  type: types.HANDLE_KEY_PRESS,
  payload: e
});

export const searchResultRequest = () => ({
  type: types.SEARCH_RESULT_REQUEST
});

export const searchResultSuccess = response => ({
  type: types.SEARCH_RESULT_SUCCESS,
  payload: response
});

export const handleCheckBoxSelect = ({ target }) => ({
  type: types.HANDLE_CHECKBOX_SELECT,
  payload: { id: target.id, checked: target.checked }
});

export const searchResultSortRequest = columnName => ({
  type: types.SEARCH_RESULT_SORT_REQUEST,
  payload: columnName
});

export const handleFilterSelect = e => ({
  type: types.HANDLE_FILTER_SELECT,
  payload: e.target
});

export const handleFilterRequest = () => ({
  type: types.HANDLE_FILTER_REQUEST
});

export const handleFilterClick = () => ({
  type: types.HANDLE_FILTER_CLICK
});

export const handleRemoveChip = id => ({
  type: types.HANDLE_REMOVE_CHIP,
  payload: id
});

export const handleSearchClick = () => ({
  type: types.HANDLE_SEARCH_CLICK
});

export const handleSearchClose = () => ({
  type: types.HANDLE_SEARCH_CLOSE
});

export const setToggleSearchCheckbox = (selected, id) => ({
  type: types.SET_TOGGLE_SEARCH_CHECKBOX,
  selected,
  id
});

export const setToggleSearchAllCheckbox = (selected, data) => ({
  type: types.SET_TOGGLE_SEARCH_ALL_CHECKBOX,
  selected,
  data
});
