import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsEditorOpen,
  setRemoveSelectedNode
} from '../../../../../State/Hydration/actions';
import ToolbarWidget from './ToolbarWidget';
import Destinations from '../Destinations/Destinations';
import Destination from '../Destination/Destination';
import Sources from '../Sources/Sources';
import Source from '../Source/Source';
import Transforms from '../Transforms/Transforms';
import Transform from '../Transform/Transform';
import {
  AddNodeToDiagram,
  NodeModel,
  RemoveNodeFromDiagram
} from '../../../../../State/Hydration/types';

interface ToolbarProps {
  selectedNode: NodeModel;
  addNodeToDiagram: AddNodeToDiagram;
  removeNodeFromDiagram: RemoveNodeFromDiagram;
  setIsScheduleJobOpen: (value: boolean) => void;
}

const Toolbar = ({
  selectedNode,
  addNodeToDiagram,
  removeNodeFromDiagram,
  setIsScheduleJobOpen
}: ToolbarProps) => {
  const [tab, setTab] = React.useState(0);
  const dispatch = useDispatch();

  const handleTabsChange = (_: any, newTab: number) => {
    dispatch(setRemoveSelectedNode(selectedNode));
    dispatch(setIsEditorOpen(false));
    setTab(newTab);
  };

  if (selectedNode) {
    return (
      <ToolbarWidget
        setTab={setTab}
        tab={tab}
        handleTabsChange={handleTabsChange}
        setIsScheduleJobOpen={setIsScheduleJobOpen}
      >
        {selectedNode.type === 'source' && (
          <Source
            id={selectedNode.id}
            sourceType={selectedNode.name}
            removeNodeFromDiagram={removeNodeFromDiagram}
          />
        )}
        {selectedNode.type === 'transform' && (
          <Transform
            id={selectedNode.id}
            removeNodeFromDiagram={removeNodeFromDiagram}
          />
        )}
        {selectedNode.type === 'destination' && (
          <Destination
            id={selectedNode.id}
            removeNodeFromDiagram={removeNodeFromDiagram}
          />
        )}
      </ToolbarWidget>
    );
  }

  return (
    <ToolbarWidget
      setTab={setTab}
      tab={tab}
      handleTabsChange={handleTabsChange}
      setIsScheduleJobOpen={setIsScheduleJobOpen}
    >
      {tab === 0 && <Sources addNodeToDiagram={addNodeToDiagram} />}
      {tab === 1 && <Transforms addNodeToDiagram={addNodeToDiagram} />}
      {tab === 2 && <Destinations addNodeToDiagram={addNodeToDiagram} />}
    </ToolbarWidget>
  );
};

export default Toolbar;
