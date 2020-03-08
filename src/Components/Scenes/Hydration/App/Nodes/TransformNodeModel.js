import { NodeModel } from '@projectstorm/react-diagrams';
import merge from 'lodash/merge';
import { TransformPortModel } from '.';

export default class TransformNodeModel extends NodeModel {
  constructor(name = 'Untitled', size = 150) {
    super('transform');
    this.name = name;
    this.size = size;
    this.addPort(new TransformPortModel('left'));
    this.addPort(new TransformPortModel('right'));
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
