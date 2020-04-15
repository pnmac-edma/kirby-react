import { NodeModel } from './types';

export const keyboardShortcuts = {
  diagram: (
    event: React.KeyboardEvent,
    removeNodeFromDiagram: (node: NodeModel, subForm: any) => void,
    node: NodeModel
  ) => {
    if (
      event.keyCode === 8 /* Backspace */ ||
      event.keyCode === 46 /* Delete */
    ) {
      event.stopPropagation();
      if (node) {
        removeNodeFromDiagram(node, `${node.type}s`);
      }
    }
  },
  source: (event: React.KeyboardEvent) => {
    if (
      event.keyCode === 8 /* Backspace */ ||
      event.keyCode === 46 /* Delete */
    ) {
      event.stopPropagation();
    }
  },
  codeEditor: (event: React.KeyboardEvent) => {
    if (
      event.keyCode === 8 /* Backspace */ ||
      event.keyCode === 46 /* Delete */
    ) {
      event.stopPropagation();
    }
  }
};
