import * as types from './types';

export const initialState = {
  isUploadModalOpen: false,
  isDestinationModalOpen: false,
  isEditorOpen: false,
  isSnackbarOpen: false,
  isSnackbarUpdated: false,
  snackbarText: '',
  selectedNode: null,
  scriptTitle: '',
  metadata: {
    sources: {},
    destinations: {},
    destinationDropdowns: {}
  },
  newDestinationMessage: '',
  isDatabaseNameExists: false,
  notificationForDatabase: false
};

const hydrationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_SELECTED_NODE: {
      // TODO: fix the action null issue and clean up this case code
      if (action.node) {
        return { ...state, selectedNode: action.node };
      }
      if (!action.event) {
        return { ...state };
      }
      const { isSelected, entity } = action.event;
      if (isSelected) {
        return { ...state, selectedNode: entity };
      }
      return { ...state, selectedNode: null };
    }
    case types.SET_REMOVE_SELECTED_NODE: {
      if (action.node) {
        action.node.selected = false;
      }
      return {
        ...state,
        selectedNode: null
      };
    }
    case types.SET_IS_EDITOR_OPEN: {
      return {
        ...state,
        isEditorOpen: action.value
      };
    }
    case types.SET_IS_DESTINATION_MODAL_OPEN: {
      return {
        ...state,
        isDestinationModalOpen: action.value
      };
    }
    case types.SET_IS_UPLOAD_MODAL_OPEN: {
      return {
        ...state,
        isUploadModalOpen: action.value
      };
    }
    case types.SET_IS_SNACKBAR_OPEN: {
      return {
        ...state,
        isSnackbarOpen: action.value
      };
    }
    case types.SET_SNACKBAR_EXIT: {
      const { isSnackbarUpdated, snackbarText } = state;

      return {
        ...state,
        isSnackbarOpen: isSnackbarUpdated,
        isSnackbarUpdated: false,
        snackbarText: isSnackbarUpdated ? snackbarText : ''
      };
    }
    case types.SET_SNACKBAR_TEXT: {
      const { isSnackbarOpen } = state;

      return {
        ...state,
        isSnackbarOpen: !isSnackbarOpen,
        isSnackbarUpdated: isSnackbarOpen,
        snackbarText: action.text
      };
    }
    case types.SOURCE_TILES_REQUESTS_FETCH:
      return { ...state };
    case types.SOURCE_TILES_REQUESTS_SUCCESS:
      return {
        ...state,
        metadata: { ...state.metadata, sources: action.sourceTiles }
      };
    case types.SOURCE_TILES_REQUESTS_FAILURE:
      return { ...state };
    case types.HANDLE_TITLE_NAME:
      return { ...state, scriptTitle: action.scriptTitle };
    case types.DESTINATIONS_REQUEST_FETCH:
      return { ...state };
    case types.DESTINATIONS_REQUEST_SUCCESS:
      return {
        ...state,
        metadata: { ...state.metadata, destinations: action.destinations }
      };
    case types.DESTINATIONS_REQUEST_FAILURE:
      return { ...state };
    case types.DESTINATIONS_DROPDOWN_REQUEST_FETCH:
      return { ...state };
    case types.DESTINATIONS_DROPDOWN_REQUEST_SUCCESS:
      return {
        ...state,
        metadata: {
          ...state.metadata,
          destinationDropdowns: action.destinations
        }
      };
    case types.DESTINATIONS_DROPDOWN_REQUEST_FAILURE:
      return { ...state };
    case types.NEW_DESTINATION_REQUEST_FETCH:
      return { ...state, newDestinationMessage: '' };
    case types.NEW_DESTINATION_REQUEST_SUCCESS:
      return { ...state, newDestinationMessage: action.newDestination.message };
    case types.DATABASE_CHECK_REQUEST_FETCH:
      return { ...state };
    case types.DATABASE_CHECK_REQUEST_SUCCESS: {
      return { ...state, isDatabaseNameExists: action.name };
    }
    default:
      return state;
  }
};

export default hydrationReducer;
