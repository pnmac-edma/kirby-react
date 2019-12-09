import * as _ from 'lodash';
import { PortModel, DefaultLinkModel } from 'storm-react-diagrams';

export default class DestPortModel extends PortModel {
  constructor(pos = 'top') {
    super(pos, 'dest');
    this.position = pos;
  }

  serialize() {
    return _.merge(super.serialize(), {
      position: this.position
    });
  }

  deSerialize(data, engine) {
    super.deSerialize(data, engine);
    this.position = data.position;
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
