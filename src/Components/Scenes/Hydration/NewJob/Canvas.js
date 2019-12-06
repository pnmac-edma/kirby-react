import React, { useState, useCallback } from 'react';
import {
  DiagramEngine,
  DiagramModel,
  DefaultNodeModel,
  DiagramWidget
} from 'storm-react-diagrams';

// import custom models
import { SourceNodeModel } from './SourceNode/SourceNodeModel';
import { SourceNodeFactory } from './SourceNode/SourceNodeFactory';
import { SimplePortFactory } from './SourceNode/SimplePortFactory';
import { SourcePortModel } from './SourceNode/SourcePortModel';

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
    this.diagramEngine.registerNodeFactory(new SourceNodeFactory());

    this.newDiagramModel();
  }

  newDiagramModel() {
    this.activeDiagramModel = new DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeDiagramModel);

    // create a default node
    var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
    let port = node1.addOutPort('Out');
    node1.setPosition(100, 100);

    // create another default node
    var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
    let port2 = node2.addInPort('In');
    node2.setPosition(400, 100);

    // create custom node
    var sourceNode = new SourceNodeModel();
    sourceNode.setPosition(700, 100);

    // link the ports
    let link1 = port.link(port2);

    // add to the diagram
    this.activeDiagramModel.addAll(node1, node2, sourceNode, link1);
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

  const getNumNodes = () =>
    Object.keys(
      app
        .getDiagramEngine()
        .getDiagramModel()
        .getNodes()
    ).length;

  const addNodeToDiagram = (type, x, y) => {
    const nodesCount = getNumNodes();
    let node = null;

    if (type === 'in') {
      node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(192,255,0)');
      node.addInPort('In');
    } else {
      node = new DefaultNodeModel('Node ' + (nodesCount + 1), 'rgb(0,192,255)');
      node.addOutPort('Out');
    }
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
          model={{ type: 'out' }}
          name="Out Node"
          color="rgb(0,192,255)"
          onClick={() => addNodeToDiagram('out', 400, 400)}
        />
        <ToolbarItemWidget
          model={{ type: 'in' }}
          name="In Node"
          color="rgb(192,255,0)"
          onClick={() => addNodeToDiagram('in', 400, 400)}
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
