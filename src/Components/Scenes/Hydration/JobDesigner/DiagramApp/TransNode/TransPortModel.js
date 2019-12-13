import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';
export default class TransPortModel extends PortModel {
  constructor(position) {
    super(position, 'trans');
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
