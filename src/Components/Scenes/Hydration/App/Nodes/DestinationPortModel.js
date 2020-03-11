import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class DestinationPortModel extends PortModel {
  constructor(position) {
    super(position, 'destination');
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
