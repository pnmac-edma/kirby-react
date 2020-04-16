import * as types from './types';

export const setRemoveSelectedRow = (Id: number): SetRemoveSelectedRow => ({
  type: types.SET_REMOVE_SELECTED_ROW,
  Id
});
interface SetRemoveSelectedRow {
  type: typeof types.SET_REMOVE_SELECTED_ROW;
  Id: number;
}

export const setRemoveGovernor = () => ({
  type: types.SET_REMOVE_GOVERNOR
});
