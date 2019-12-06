import { NodeModel } from 'storm-react-diagrams';
import { SourcePortModel } from './SourcePortModel';

export class SourceNodeModel extends NodeModel {
  constructor() {
    super('source');
    this.addPort(new SourcePortModel('right'));
  }
}
