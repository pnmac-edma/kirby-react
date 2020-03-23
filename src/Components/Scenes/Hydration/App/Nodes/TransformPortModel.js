import { PortModel } from '@projectstorm/react-diagrams';
import { TransformLinkModel } from './TransformLinkFactory';

export default class TransformPortModel extends PortModel {
  constructor(position) {
    super(position, 'transform');
  }

  createLinkModel() {
    return new TransformLinkModel();
  }
}
