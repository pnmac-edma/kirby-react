import * as types from './types';

export const initialState = {
  isDestinationModalOpen: false,
  isEditorOpen: false,
  selectedNode: null,
  metadata: {
    sourceTiles: {}
  }
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
    case types.SOURCE_TILES_REQUESTS_FETCH:
      return { ...state };
    case types.SOURCE_TILES_REQUESTS_SUCCESS:
      return {
        ...state,
        metadata: { ...state.metadata, sourceTiles: action.sourceTiles }
      };
    case types.SOURCE_TILES_REQUESTS_FAILURE:
      return { ...state };
    case types.DESTINATIONS_REQUEST_FETCH: {
      console.log('Reducer Fetch');
      return { ...state };
    }
    case types.DESTINATIONS_REQUEST_SUCCESS:
      return { ...state };
    case types.DESTINATIONS_REQUEST_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default hydrationReducer;
