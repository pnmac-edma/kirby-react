import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class DestPortModel extends PortModel {
  constructor(position) {
    super(position, 'dest');
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
