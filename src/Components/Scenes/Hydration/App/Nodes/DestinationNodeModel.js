import { NodeModel } from '@projectstorm/react-diagrams';
import merge from 'lodash/merge';
import { DestinationPortModel } from '.';

export default class DestinationNodeModel extends NodeModel {
  constructor(name = 'Untitled', size = 150) {
    super('destination');
    this.name = name;
    this.size = size;
    this.addPort(new DestinationPortModel('left'));
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
