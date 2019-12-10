import { DiagramEngine, DiagramModel } from 'storm-react-diagrams';

import { SimplePortFactory } from './SimplePortFactory';
import { SourceNodeFactory, SourcePortModel } from './SourceNode';
import { DestNodeFactory, DestPortModel } from './DestNode';
import { TransNodeFactory, TransPortModel } from './TransNode';

export default class DiagramApp {
  constructor() {
    this.diagramEngine = new DiagramEngine();
    this.diagramEngine.installDefaultFactories();

    // register custom port and node factories
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

    this.activeDiagramModel = new DiagramModel();
    this.diagramEngine.setDiagramModel(this.activeDiagramModel);
  }

  getDiagramEngine() {
    return this.diagramEngine;
  }
}
