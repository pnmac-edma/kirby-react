import { DefaultLinkModel, PortModel } from '@projectstorm/react-diagrams';

export default class SourcePortModel extends PortModel {
  constructor(position) {
    super(position, 'source');
  }

  createLinkModel() {
    return new DefaultLinkModel('source');
  }
}
