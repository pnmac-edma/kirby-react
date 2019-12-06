import * as _ from 'lodash';
import { PortModel, DefaultLinkModel } from 'storm-react-diagrams';

export class TransPortModel extends PortModel {
  constructor(pos = 'top') {
    super(pos, 'trans');
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

  link(port) {
    let link = this.createLinkModel();
    link.setSourcePort(this);
    link.setTargetPort(port);
    return link;
  }
}
