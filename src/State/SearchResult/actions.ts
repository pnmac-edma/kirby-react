import * as types from './types';

export const searchHandleInput = (e: React.ChangeEvent<HTMLInputElement>) => ({
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

export const handleSearchClick = () => ({
  type: types.HANDLE_SEARCH_CLICK
});

export const handleSearchClose = () => ({
  type: types.HANDLE_SEARCH_CLOSE
});

export const setRemoveSelected = (selectedAssets: Array<number>) => ({
  type: types.SET_REMOVE_SELECTED,
  selectedAssets
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
