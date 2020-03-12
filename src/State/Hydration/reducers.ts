import * as types from './types';

export const initialState = {
  isDestinationModalOpen: false,
  isEditorOpen: false,
  selectedNode: null
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
    default:
      return state;
  }
};

export default hydrationReducer;
