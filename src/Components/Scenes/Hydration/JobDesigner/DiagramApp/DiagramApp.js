import { DiagramEngine, DiagramModel } from 'storm-react-diagrams';

import { SimplePortFactory } from './SimplePortFactory';

import { SourceNodeFactory } from './SourceNode/SourceNodeFactory';
import { SourcePortModel } from './SourceNode/SourcePortModel';

import { DestNodeFactory } from './DestNode/DestNodeFactory';
import { DestPortModel } from './DestNode/DestPortModel';

import { TransNodeFactory } from './TransNode/TransNodeFactory';
import { TransPortModel } from './TransNode/TransPortModel';

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
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }
}
