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

export const handleTitleName = (value: string): HandleTitleNameAction => ({
  type: types.HANDLE_TITLE_NAME,
  scriptTitle: value
});
interface HandleTitleNameAction {
  type: typeof types.HANDLE_TITLE_NAME;
  scriptTitle: string;
}

export const destinationRequestFetch = (): DestinationRequestFetchAction => ({
  type: types.DESTINATIONS_REQUEST_FETCH
});
interface DestinationRequestFetchAction {
  type: typeof types.DESTINATIONS_REQUEST_FETCH;
}

export const destinationRequestSuccess = (
  destinations: types.Destinations
): DestinationRequestSuccessAction => ({
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

export const setIsSnackbarOpen = (value: boolean): SetIsSnackbarOpenAction => ({
  type: types.SET_IS_SNACKBAR_OPEN,
  value
});
interface SetIsSnackbarOpenAction {
  type: typeof types.SET_IS_SNACKBAR_OPEN;
  value: boolean;
}

export const setSnackbarText = (text: string): SetSnackbarTextAction => ({
  type: types.SET_SNACKBAR_TEXT,
  text
});
interface SetSnackbarTextAction {
  type: typeof types.SET_SNACKBAR_TEXT;
  text: string;
}

export const setSnackbarExit = (): SetSnackbarExitAction => ({
  type: types.SET_SNACKBAR_EXIT
});
interface SetSnackbarExitAction {
  type: typeof types.SET_SNACKBAR_EXIT;
}

export const destinationDropdownRequestFetch = (): DestinationDropdownRequestFetchAction => ({
  type: types.DESTINATIONS_DROPDOWN_REQUEST_FETCH
});
interface DestinationDropdownRequestFetchAction {
  type: typeof types.DESTINATIONS_DROPDOWN_REQUEST_FETCH;
}

export const destinationDropdownRequestSuccess = (
  destinationDropdowns: types.DestinationDropDowns
): DestinationDropdownRequestSuccessAction => ({
  type: types.DESTINATIONS_DROPDOWN_REQUEST_SUCCESS,
  destinationDropdowns
});
interface DestinationDropdownRequestSuccessAction {
  type: typeof types.DESTINATIONS_DROPDOWN_REQUEST_SUCCESS;
  destinationDropdowns: types.DestinationDropDowns;
}

export const destinationDropdownRequestFailure = (): DestinationDropdownRequestFailureAction => ({
  type: types.DESTINATIONS_DROPDOWN_REQUEST_FAILURE
});
interface DestinationDropdownRequestFailureAction {
  type: typeof types.DESTINATIONS_DROPDOWN_REQUEST_FAILURE;
}
