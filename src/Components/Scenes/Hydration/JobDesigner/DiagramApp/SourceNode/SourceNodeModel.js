import { NodeModel } from '@projectstorm/react-diagrams';
import * as _ from 'lodash';
import { SourcePortModel } from '.';

export default class SourceNodeModel extends NodeModel {
  constructor(name = 'Untitled', size = 150) {
    super('source');
    this.name = name;
    this.size = size;
    this.addPort(new SourcePortModel('right'));
  }

  deSerialize(object, engine) {
    super.deSerialize(object, engine);
    this.name = object.name;
    this.size = object.size;
  }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      size: this.size
    });
  }
}
