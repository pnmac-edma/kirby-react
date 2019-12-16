import { NodeModel } from '@projectstorm/react-diagrams';
import merge from 'lodash/merge';
import { TransPortModel } from '.';

export default class TransNodeModel extends NodeModel {
  constructor(name = 'Untitled', size = 150) {
    super('trans');
    this.name = name;
    this.size = size;
    this.addPort(new TransPortModel('left'));
    this.addPort(new TransPortModel('right'));
  }

  deSerialize(object, engine) {
    super.deSerialize(object, engine);
    this.name = object.name;
    this.size = object.size;
  }

  serialize() {
    return merge(super.serialize(), {
      name: this.name,
      size: this.size
    });
  }
}
