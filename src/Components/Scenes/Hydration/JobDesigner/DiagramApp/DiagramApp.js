import { DiagramEngine, DiagramModel } from 'storm-react-diagrams';

import { SimplePortFactory } from './SimplePortFactory';

import { SourceNodeFactory } from './SourceNode/SourceNodeFactory';
import { SourcePortModel } from './SourceNode/SourcePortModel';
import { SourceNodeModel } from './SourceNode/SourceNodeModel';

import { DestNodeFactory } from './DestNode/DestNodeFactory';
import { DestPortModel } from './DestNode/DestPortModel';
import { DestNodeModel } from './DestNode/DestNodeModel';

import { TransNodeFactory } from './TransNode/TransNodeFactory';
import { TransPortModel } from './TransNode/TransPortModel';
import { TransNodeModel } from './TransNode/TransNodeModel';

export default class DiagramApp {
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
    this.diagramEngine.registerPortFactory(
      new SimplePortFactory('trans', config => new TransPortModel())
    );

    this.diagramEngine.registerNodeFactory(new SourceNodeFactory());
    this.diagramEngine.registerNodeFactory(new DestNodeFactory());
    this.diagramEngine.registerNodeFactory(new TransNodeFactory());

    this.newDiagramModel();
  }

  newDiagramModel() {
    this.activeDiagramModel = new DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeDiagramModel);

    // create custom source node
    let sourceNode = new SourceNodeModel();
    sourceNode.setPosition(200, 100);

    // create custom transformation node
    let transNode = new TransNodeModel();
    transNode.setPosition(500, 100);

    // create custom destination node
    let destNode = new DestNodeModel();
    destNode.setPosition(800, 100);

    // link the ports
    let link1 = sourceNode.getPort('right').link(transNode.getPort('left'));
    let link2 = transNode.getPort('right').link(destNode.getPort('left'));

    // add to the diagram
    let models = this.activeDiagramModel.addAll(
      sourceNode,
      transNode,
      destNode,
      link1,
      link2
    );

    // add a listener to each model
    models.forEach(model => {
      model.addListener({
        selectionChanged: event => console.log(event)
      });
    });
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }
}
