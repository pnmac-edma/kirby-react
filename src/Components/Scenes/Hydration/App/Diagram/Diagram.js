import { DiagramEngine, DiagramModel } from '@projectstorm/react-diagrams';
import {
  DestinationNodeFactory,
  DestinationPortModel,
  SimplePortFactory,
  SourceNodeFactory,
  SourcePortModel,
  TransformNodeFactory,
  TransformPortModel
} from '../Nodes';

export default class Diagram {
  constructor() {
    this.engine = new DiagramEngine();
    this.engine.installDefaultFactories();

    // register custom port and node factories
    this.engine.registerPortFactory(
      new SimplePortFactory('source', config => new SourcePortModel())
    );
    this.engine.registerPortFactory(
      new SimplePortFactory('destination', config => new DestinationPortModel())
    );
    this.engine.registerPortFactory(
      new SimplePortFactory('transform', config => new TransformPortModel())
    );
    this.engine.registerNodeFactory(new SourceNodeFactory());
    this.engine.registerNodeFactory(new DestinationNodeFactory());
    this.engine.registerNodeFactory(new TransformNodeFactory());

    this.activeModel = new DiagramModel();
    this.engine.setDiagramModel(this.activeModel);
  }

  getDiagramEngine() {
    return this.engine;
  }
}
