import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class TransformPortModel extends PortModel {
  constructor(position) {
    super(position, 'transform');
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
}
