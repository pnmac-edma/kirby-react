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

export const sourceTilesRequestFetch = (): SourceTilesRequestFetchAction => ({
  type: types.SOURCE_TILES_REQUESTS_FETCH
});
interface SourceTilesRequestFetchAction {
  type: typeof types.SOURCE_TILES_REQUESTS_FETCH;
}

export const sourceTilesRequestSuccess = (
  sourceTiles: types.SourceTiles
): SourceTilesRequestSuccessAction => ({
  type: types.SOURCE_TILES_REQUESTS_SUCCESS,
  sourceTiles
});
interface SourceTilesRequestSuccessAction {
  type: typeof types.SOURCE_TILES_REQUESTS_SUCCESS;
  sourceTiles: types.SourceTiles;
}

export const sourceTilesRequestFailure = (
  message: any
): SourceTilesRequestFailureAction => ({
  type: types.SOURCE_TILES_REQUESTS_FAILURE,
  message
});
interface SourceTilesRequestFailureAction {
  type: typeof types.SOURCE_TILES_REQUESTS_FAILURE;
  message: any;
}

export const destinationRequestFetch = (): DestinationRequestFetchAction => ({
  type: types.DESTINATIONS_REQUEST_FETCH
});
interface DestinationRequestFetchAction {
  type: typeof types.DESTINATIONS_REQUEST_FETCH;
}

export const destinationRequestSuccess = (
  destinations: types.Destinations
) => ({
  type: types.DESTINATIONS_REQUEST_SUCCESS,
  destinations
});
interface DestinationRequestSuccessAction {
  type: typeof types.DESTINATIONS_REQUEST_SUCCESS;
  destinations: types.Destinations;
}

export const destinationRequestFailure = (
  message: any
): DestinationRequestFailurehAction => ({
  type: types.DESTINATIONS_REQUEST_FAILURE,
  message
});
interface DestinationRequestFailurehAction {
  type: typeof types.DESTINATIONS_REQUEST_FAILURE;
  message: any;
}
