import * as types from './types';

export const setSelectedNode = (
  event: React.FormEvent<HTMLFormElement> | null
) => ({
  type: types.SET_SELECTED_NODE,
  event
});

export const setRemoveNode = () => ({
  type: types.SET_REMOVE_NODE
});
