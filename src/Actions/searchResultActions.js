import * as types from './types';

export const searchHandleInput = e => ({
  type: types.SEARCH_HANDLE_INPUT,
  payload: e.target.value
});

export const searchResultRequest = () => ({
  type: types.SEARCH_RESULT_REQUEST
});

export const searchResultSuccess = response => ({
  type: types.SEARCH_RESULT_SUCCESS,
  payload: response
});

export const handleCheckBoxSelect = e => ({
  type: types.HANDLE_CHECKBOX_SELECT,
  payload: e.target
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
