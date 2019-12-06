import React, { useState, useReducer } from 'react';
import { DiagramWidget } from 'storm-react-diagrams';

// import custom models
import { SourceNodeModel } from './DiagramApp/SourceNode/SourceNodeModel';
import { DestNodeModel } from './DiagramApp/DestNode/DestNodeModel';
import { ToolbarWidget, ToolbarItemWidget } from './Toolbar/Toolbar';
import DiagramApp from './DiagramApp/DiagramApp';
import { TransNodeModel } from './DiagramApp/TransNode/TransNodeModel';
require('storm-react-diagrams/dist/style.min.css');

const JobDesigner = props => {
  const { app } = props;

  const [selectedNode, setSelectedNode] = useState(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const addNodeToDiagram = (type, x, y) => {
    let node = null;

    if (type === 'source') node = new SourceNodeModel();
    else if (type === 'trans') node = new TransNodeModel();
    else if (type === 'dest') node = new DestNodeModel();
    node.x = x;
    node.y = y;
    app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
    node.addListener({
      selectionChanged: event => {
        if (event.isSelected) {
          setSelectedNode(event.entity.id);
        } else {
          setSelectedNode('');
        }
      },
      entityRemoved: event => console.log(event)
      // if (event.entity.id === selectedNode) {
      //  setSelectedNode(null);
      //}
    });
    forceUpdate();
  };
  return (
    <div className="body">
      <div
        className="diagram-layer"
        onDrop={event => {
          const data = JSON.parse(
            event.dataTransfer.getData('storm-diagram-node')
          );
          const points = app.getDiagramEngine().getRelativeMousePoint(event);
          addNodeToDiagram(data.type, points.x, points.y);
        }}
        onDragOver={event => event.preventDefault()}
      >
        <DiagramWidget
          className="srd-demo-canvas"
          diagramEngine={app.getDiagramEngine()}
        />
      </div>
      <ToolbarWidget>
        <ToolbarItemWidget
          model={{ type: 'source' }}
          name="Source Node"
          color="#31AFDF"
          onClick={() => addNodeToDiagram('source', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'trans' }}
          name="Transformation Node"
          color="#CA4ABE"
          onClick={() => addNodeToDiagram('trans', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'dest' }}
          name="Destination Node"
          color="#EF736E"
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
        {`${selectedNode || 'nothing'} is selected`}
      </ToolbarWidget>
    </div>
  );
};

const JobDesignerApp = () => <JobDesigner app={new DiagramApp()} />;

export default JobDesignerApp;
