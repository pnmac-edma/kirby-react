import { NodeModel } from 'storm-react-diagrams';
import { DestPortModel } from './DestPortModel';

export class DestNodeModel extends NodeModel {
  constructor() {
    super('dest');
    this.addPort(new DestPortModel('left'));
  }
}
