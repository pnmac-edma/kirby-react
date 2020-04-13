import * as types from './types';

export const searchResultPageLoad = (params: any) => ({
  type: types.SEARCH_RESULT_PAGE_LOAD,
  payload: params
});

export const searchHandleInput = (e: { target: { value: any } }) => ({
  type: types.SEARCH_HANDLE_INPUT,
  payload: e.target.value
});

export const handleKeyPress = (e: any) => ({
  type: types.HANDLE_KEY_PRESS,
  payload: e
});

export const searchResultRequest = (searchInput: any) => ({
  type: types.SEARCH_RESULT_REQUEST,
  payload: searchInput
});

export const handleFilterSelect = (e: { target: any }) => ({
  type: types.HANDLE_FILTER_SELECT,
  payload: e.target
});

export const handleFilterRequest = () => ({
  type: types.HANDLE_FILTER_REQUEST
});

export const handleFilterClick = () => ({
  type: types.HANDLE_FILTER_CLICK
});

export const handleRemoveChip = (id: any) => ({
  type: types.HANDLE_REMOVE_CHIP,
  payload: id
});

export const handleSearchClick = () => ({
  type: types.HANDLE_SEARCH_CLICK
});

export const handleSearchClose = () => ({
  type: types.HANDLE_SEARCH_CLOSE
});

export const setToggleSearchCheckbox = (selected: any, id: any) => ({
  type: types.SET_TOGGLE_SEARCH_CHECKBOX,
  selected,
  id
});

export const setToggleSearchAllCheckbox = (selected: any, data: any) => ({
  type: types.SET_TOGGLE_SEARCH_ALL_CHECKBOX,
  selected,
  data
});
