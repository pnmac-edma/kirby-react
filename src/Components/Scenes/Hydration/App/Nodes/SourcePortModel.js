import { PortModel } from '@projectstorm/react-diagrams';
import { SourceLinkModel } from './SourceLinkFactory';

export default class SourcePortModel extends PortModel {
  constructor(position) {
    super(position, 'source');
  }

  createLinkModel() {
    return new SourceLinkModel();
  }
}
