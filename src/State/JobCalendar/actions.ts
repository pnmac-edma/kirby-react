import * as types from './types';

export const setField = (field: string, value: any): SetFieldAction => ({
  type: types.SET_FIELD,
  field,
  value
});
interface SetFieldAction {
  type: typeof types.SET_FIELD;
  field: string;
  value: any;
}
