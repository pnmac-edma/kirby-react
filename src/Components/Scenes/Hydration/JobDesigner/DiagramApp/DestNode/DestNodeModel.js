import { NodeModel } from '@projectstorm/react-diagrams';
import * as _ from 'lodash';
import { DestPortModel } from '.';

export default class DestNodeModel extends NodeModel {
  constructor(name = 'Untitled', size = 150) {
    super('dest');
    this.name = name;
    this.size = size;
    this.addPort(new DestPortModel('left'));
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
