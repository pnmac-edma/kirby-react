import * as types from './types';

export const setSelectedNode = (
  event: React.FormEvent<HTMLFormElement> | null,
  node?: any
): SetSelectedNodeAction => ({
  type: types.SET_SELECTED_NODE,
  event,
  node
});
interface SetSelectedNodeAction {
  type: typeof types.SET_SELECTED_NODE;
  event: React.FormEvent<HTMLFormElement> | null;
  node: any;
}

export const setRemoveNode = (): SetRemoveNodeAction => ({
  type: types.SET_REMOVE_NODE
});
interface SetRemoveNodeAction {
  type: typeof types.SET_REMOVE_NODE;
}

export const setIsEditorOpen = (value: boolean): SetIsEditorOpenAction => ({
  type: types.SET_IS_EDITOR_OPEN,
  value
});
interface SetIsEditorOpenAction {
  type: typeof types.SET_IS_EDITOR_OPEN;
  value: boolean;
}
