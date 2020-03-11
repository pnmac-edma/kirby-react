import * as types from './types';

export const setSelectedNode = (
  event: React.FormEvent<HTMLFormElement> | null,
  node?: types.NodeModel
): SetSelectedNodeAction => ({
  type: types.SET_SELECTED_NODE,
  event,
  node
});
interface SetSelectedNodeAction {
  type: typeof types.SET_SELECTED_NODE;
  event: React.FormEvent<HTMLFormElement> | null;
  node: types.NodeModel | undefined;
}

export const setRemoveNode = (
  node: types.NodeModel | null
): SetRemoveNodeAction => ({
  type: types.SET_REMOVE_NODE,
  node
});
interface SetRemoveNodeAction {
  type: typeof types.SET_REMOVE_NODE;
  node: types.NodeModel | null;
}

export const setIsEditorOpen = (value: boolean): SetIsEditorOpenAction => ({
  type: types.SET_IS_EDITOR_OPEN,
  value
});
interface SetIsEditorOpenAction {
  type: typeof types.SET_IS_EDITOR_OPEN;
  value: boolean;
}
