import React, { useState, useReducer, useEffect } from 'react';
import { DiagramWidget } from 'storm-react-diagrams';

// import custom models
import { SourceNodeModel } from './DiagramApp/SourceNode/SourceNodeModel';
import { DestNodeModel } from './DiagramApp/DestNode/DestNodeModel';
import { ToolbarWidget, ToolbarItemWidget } from './Toolbar/Toolbar';
import DiagramApp from './DiagramApp/DiagramApp';
import { TransNodeModel } from './DiagramApp/TransNode/TransNodeModel';
import { Typography } from '@material-ui/core';
require('storm-react-diagrams/dist/style.min.css');

const JobDesigner = props => {
  const { app } = props;

  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeType, setNodeType] = useState(null);
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
          setNodeType(event.entity.type);
        } else {
          setSelectedNode(null);
          setNodeType(null);
        }
      },
      entityRemoved: event => {
        setSelectedNode(null);
        setNodeType(null);
      }
    });
    forceUpdate();
  };

  const renderToolbar = () => {
    if (selectedNode !== null) {
      const toolbarType = {
        source: 'Source',
        trans: 'Transformation',
        dest: 'Destination'
      }[nodeType];
      return (
        <div className="toolbar">
          <Typography style={{ textAlign: 'center' }} variant="h5">
            Toolbar for {toolbarType}
          </Typography>
          <Typography style={{ textAlign: 'center' }}>
            Node ID:
            <br /> {selectedNode}
          </Typography>
        </div>
      );
    } else {
      return (
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
        </ToolbarWidget>
      );
    }
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
      {renderToolbar()}
    </div>
  );
};

const JobDesignerApp = () => <JobDesigner app={new DiagramApp()} />;

export default JobDesignerApp;
