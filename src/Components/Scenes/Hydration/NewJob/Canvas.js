import React, { useState, useCallback } from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget
} from 'storm-react-diagrams';

// import custom models
import { SimplePortFactory } from './SimplePortFactory';

import { SourceNodeModel } from './SourceNode/SourceNodeModel';
import { SourceNodeFactory } from './SourceNode/SourceNodeFactory';
import { SourcePortModel } from './SourceNode/SourcePortModel';

import { DestNodeModel } from './DestNode/DestNodeModel';
import { DestNodeFactory } from './DestNode/DestNodeFactory';
import { DestPortModel } from './DestNode/DestPortModel';

import { ToolbarWidget, ToolbarItemWidget } from './Toolbar';
require('storm-react-diagrams/dist/style.min.css');

class Application {
  constructor() {
    this.diagramEngine = new DiagramEngine();
    this.diagramEngine.installDefaultFactories();

    // register custom factories
    this.diagramEngine.registerPortFactory(
      new SimplePortFactory('source', config => new SourcePortModel())
    );
    this.diagramEngine.registerPortFactory(
      new SimplePortFactory('dest', config => new DestPortModel())
    );

    this.diagramEngine.registerNodeFactory(new SourceNodeFactory());
    this.diagramEngine.registerNodeFactory(new DestNodeFactory());

    this.newDiagramModel();
  }

  newDiagramModel() {
    this.activeDiagramModel = new DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeDiagramModel);

    // create custom source node
    let sourceNode = new SourceNodeModel();
    //let sourcePort = sourceNode.addPort();
    sourceNode.setPosition(200, 100);

    // create custom destination node
    let destNode = new DestNodeModel();
    //let destPort = destNode.addPort();
    destNode.setPosition(600, 100);

    // link the ports
    let link = sourceNode.getPort('right').link(destNode.getPort('left'));

    // add to the diagram
    this.activeDiagramModel.addAll(sourceNode, destNode, link);
  }

  getActiveDiagram() {
    return this.activeDiagramModel;
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }
}

const BodyWidget = props => {
  const { app } = props;

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const addNodeToDiagram = (type, x, y) => {
    let node = null;

    if (type === 'source') node = new SourceNodeModel();
    else if (type === 'dest') node = new DestNodeModel();
    node.x = x;
    node.y = y;
    app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
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
          model={{ type: 'dest' }}
          name="Destination Node"
          color="#EF736E"
          onClick={() => addNodeToDiagram('dest', 400, 400)}
        />
      </ToolbarWidget>
    </div>
  );
};

const Canvas = () => {
  var app = new Application();

  return <BodyWidget app={app} />;
};

export default Canvas;
