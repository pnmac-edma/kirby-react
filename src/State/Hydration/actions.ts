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

export const setRemoveSelectedNode = (
  node: types.NodeModel | null
): SetRemoveSelectedNodeAction => ({
  type: types.SET_REMOVE_SELECTED_NODE,
  node
});
interface SetRemoveSelectedNodeAction {
  type: typeof types.SET_REMOVE_SELECTED_NODE;
  node: types.NodeModel | null;
}

// export const setRemoveNodeData = (
//   id: string
// ): SetRemoveNodeDataAction => ({
//   type: types.SET_REMOVE_NODE_DATA,
//   id
// });
// interface SetRemoveNodeDataAction {
//   type: types.SET_REMOVE_NODE_DATA,
//   id: string
// }

export const setIsEditorOpen = (value: boolean): SetIsEditorOpenAction => ({
  type: types.SET_IS_EDITOR_OPEN,
  value
});
interface SetIsEditorOpenAction {
  type: typeof types.SET_IS_EDITOR_OPEN;
  value: boolean;
}

export const setIsDestinationModalOpen = (
  value: boolean
): SetIsDestinationModalOpenAction => ({
  type: types.SET_IS_DESTINATION_MODAL_OPEN,
  value
});
interface SetIsDestinationModalOpenAction {
  type: typeof types.SET_IS_DESTINATION_MODAL_OPEN;
  value: boolean;
}
