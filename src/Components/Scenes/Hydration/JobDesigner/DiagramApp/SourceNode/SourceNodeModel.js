import { NodeModel } from 'storm-react-diagrams';
import { SourcePortModel } from '.';

export default class SourceNodeModel extends NodeModel {
  constructor(name = 'untitled', size = 150) {
    super('source');
    this.name = name;
    this.size = size;
    this.addPort(new SourcePortModel('left'));
  }
}
