import { DiagramEngine, DiagramModel } from '@projectstorm/react-diagrams';

import { SimplePortFactory } from './SimplePortFactory';
import { SourceNodeFactory, SourcePortModel } from './SourceNode';
import { DestNodeFactory, DestPortModel } from './DestNode';
import { TransNodeFactory, TransPortModel } from './TransNode';

export default class DiagramApp {
  constructor() {
    this.engine = new DiagramEngine();
    console.log(this.engine);
    //this.diagramEngine.installDefaultFactories();

    // register custom port and node factories
    this.engine.registerPortFactory(
      new SimplePortFactory('source', config => new SourcePortModel())
    );
    this.engine.registerPortFactory(
      new SimplePortFactory('dest', config => new DestPortModel())
    );
    this.engine.registerPortFactory(
      new SimplePortFactory('trans', config => new TransPortModel())
    );
    this.engine.registerNodeFactory(new SourceNodeFactory());
    this.engine.registerNodeFactory(new DestNodeFactory());
    this.engine.registerNodeFactory(new TransNodeFactory());

    this.activeModel = new DiagramModel();
    this.engine.setDiagramModel(this.activeModel);
  }

  getDiagramEngine() {
    return this.engine;
  }
}
