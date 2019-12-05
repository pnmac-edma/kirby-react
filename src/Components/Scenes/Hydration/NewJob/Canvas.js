import React, { useState, useCallback } from 'react';
import * as _ from 'lodash';
import * as SRD from '@projectstorm/react-diagrams';
import { ToolbarWidget, ToolbarItemWidget } from './Toolbar';
require('@projectstorm/react-diagrams/dist/style.min.css');

class Application {
  constructor() {
    this.diagramEngine = new SRD.DiagramEngine();
    this.diagramEngine.installDefaultFactories();

    this.newModel();
  }

  newModel() {
    this.activeModel = new SRD.DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeModel);

    //3-A) create a default node
    var node1 = new SRD.DefaultNodeModel('Node 1', 'rgb(0,192,255)');
    let port = node1.addOutPort('Out');
    node1.setPosition(100, 100);

    //3-B) create another default node
    var node2 = new SRD.DefaultNodeModel('Node 2', 'rgb(192,255,0)');
    let port2 = node2.addInPort('In');
    node2.setPosition(400, 100);

    // link the ports
    let link1 = port.link(port2);

    this.activeModel.addAll(node1, node2, link1);
  }

  getActiveDiagram() {
    return this.activeModel;
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }
}

const BodyWidget = props => {
  const { app } = props;

  const getNumNodes = () =>
    _.keys(
      app
        .getDiagramEngine()
        .getDiagramModel()
        .getNodes()
    ).length;

  const createNode = type => {
    var node = null;
    const nodesCount = getNumNodes();

    if (type === 'in') {
      node = new SRD.DefaultNodeModel(
        'Node ' + (nodesCount + 1),
        'rgb(192,255,0)'
      );
      node.addInPort('In');
    } else if (type === 'out') {
      node = new SRD.DefaultNodeModel(
        'Node ' + (nodesCount + 1),
        'rgb(0,192,255)'
      );
      node.addOutPort('Out');
    }
    node.x = 400;
    node.y = 400;
    app
      .getDiagramEngine()
      .getDiagramModel()
      .addNode(node);
    forceUpdate();
  };

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <div className="body">
      <div className="content">
        <div
          className="diagram-layer"
          onDrop={event => {
            var data = JSON.parse(
              event.dataTransfer.getData('storm-diagram-node')
            );
            const nodesCount = getNumNodes();

            let node = null;
            if (data.type === 'in') {
              node = new SRD.DefaultNodeModel(
                'Node ' + (nodesCount + 1),
                'rgb(192,255,0)'
              );
              node.addInPort('In');
            } else {
              node = new SRD.DefaultNodeModel(
                'Node ' + (nodesCount + 1),
                'rgb(0,192,255)'
              );
              node.addOutPort('Out');
            }
            const points = app.getDiagramEngine().getRelativeMousePoint(event);
            node.x = points.x;
            node.y = points.y;
            app
              .getDiagramEngine()
              .getDiagramModel()
              .addNode(node);
            forceUpdate();
          }}
          onDragOver={event => {
            event.preventDefault();
          }}
        >
          <SRD.DiagramWidget
            className="srd-demo-canvas"
            diagramEngine={app.getDiagramEngine()}
          />
        </div>
        <ToolbarWidget>
          <ToolbarItemWidget
            model={{ type: 'out' }}
            name="Out Node"
            color="rgb(0,192,255)"
            onClick={() => {
              createNode('out');
            }}
          />
          <ToolbarItemWidget
            model={{ type: 'in' }}
            name="In Node"
            color="rgb(192,255,0)"
            onClick={() => {
              createNode('in');
            }}
          />
        </ToolbarWidget>
      </div>
    </div>
  );
};

const Canvas = () => {
  var app = new Application();

  return <BodyWidget app={app} />;
};

export default Canvas;
