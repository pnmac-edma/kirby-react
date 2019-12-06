import { NodeModel } from 'storm-react-diagrams';
import { TransPortModel } from './TransPortModel';

export class TransNodeModel extends NodeModel {
  constructor() {
    super('trans');
    this.addPort(new TransPortModel('left'));
    this.addPort(new TransPortModel('right'));
  }
}
