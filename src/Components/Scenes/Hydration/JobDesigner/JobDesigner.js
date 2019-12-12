import React, { useState, useReducer } from 'react';
import { DiagramWidget } from 'storm-react-diagrams';
import { Toolbar } from './Toolbar/Toolbar';
import DiagramApp from './DiagramApp/DiagramApp';

// import custom models
import { SourceNodeModel } from './DiagramApp/SourceNode';
import { DestNodeModel } from './DiagramApp/DestNode';
import { TransNodeModel } from './DiagramApp/TransNode';

const JobDesigner = props => {
  const { app } = props;

  const [selectedNode, setSelectedNode] = useState(null);
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const addNodeToDiagram = (type, x, y) => {
    let node;

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
          setSelectedNode(event.entity);
        } else {
          setSelectedNode(null);
        }
      },
      entityRemoved: event => setSelectedNode(null)
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
      <Toolbar
        selectedNode={selectedNode}
        addNodeToDiagram={addNodeToDiagram}
      />
    </div>
  );
};

const JobDesignerApp = () => <JobDesigner app={new DiagramApp()} />;

export default JobDesignerApp;
