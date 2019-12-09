import { NodeModel } from 'storm-react-diagrams';
import { DestPortModel } from '.';

export default class DestNodeModel extends NodeModel {
  constructor(name = 'untitled', size = 150) {
    super('dest');
    this.name = name;
    this.size = size;
    this.addPort(new DestPortModel('left'));
  }
}
