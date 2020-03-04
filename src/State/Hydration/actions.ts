import * as types from './types';

export const setSelectedNode = (
  event: React.FormEvent<HTMLFormElement> | null
): setSelectedNodeAction => ({
  type: types.SET_SELECTED_NODE,
  event
});
interface setSelectedNodeAction {
  type: typeof types.SET_SELECTED_NODE;
  event: React.FormEvent<HTMLFormElement> | null;
}

export const setRemoveNode = (): setRemoveNodeAction => ({
  type: types.SET_REMOVE_NODE
});
interface setRemoveNodeAction {
  type: typeof types.SET_REMOVE_NODE;
}
