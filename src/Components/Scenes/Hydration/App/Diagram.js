import { DiagramEngine, DiagramModel } from '@projectstorm/react-diagrams';
import {
  DestNodeFactory,
  DestPortModel,
  SimplePortFactory,
  SourceNodeFactory,
  SourcePortModel,
  TransNodeFactory,
  TransPortModel
} from '../AppNodes';

export default class Diagram {
  constructor() {
    this.engine = new DiagramEngine();
    this.engine.installDefaultFactories();

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
