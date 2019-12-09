import { NodeModel } from 'storm-react-diagrams';
import { TransPortModel } from '.';

export default class TransNodeModel extends NodeModel {
  constructor(name = 'untitled', size = 150) {
    super('trans');
    this.name = name;
    this.size = size;
    this.addPort(new TransPortModel('left'));
    this.addPort(new TransPortModel('right'));
  }
}
