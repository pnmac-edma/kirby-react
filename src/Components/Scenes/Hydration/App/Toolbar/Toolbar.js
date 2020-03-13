import React from 'react';
import { useDispatch } from 'react-redux';
import { setRemoveSelectedNode } from '../../../../../State/Hydration/actions';
import ToolbarWidget from './ToolbarWidget';
import Destinations from '../Destinations/Destinations';
import Destination from '../Destination/Destination';
import Sources from '../Sources/Sources';
import Source from '../Source/Source';
import Transforms from '../Transforms/Transforms';
import Transform from '../Transform/Transform';

export const Toolbar = props => {
  const { selectedNode, addNodeToDiagram, removeNodeFromDiagram, setIsScheduleJobOpen } = props;
  const [tab, setTab] = React.useState(0);
  const dispatch = useDispatch();

  const handleTabsChange = (event, newTab) => {
    dispatch(setRemoveSelectedNode(selectedNode));
    setTab(newTab);
  };

  if (selectedNode) {
    return (
      <ToolbarWidget tab={tab} handleTabsChange={handleTabsChange}>
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
