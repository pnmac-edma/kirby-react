import { DefaultLinkModel, PortModel } from '@projectstorm/react-diagrams';

export default class SourcePortModel extends PortModel {
  constructor(position) {
    super(position, 'source');
  }

  createLinkModel() {
    return new DefaultLinkModel('source');
  }

  canLinkToPort(port) {
    const sourceType = this.getNode().name;
    const targetPort = port.type;
    if (sourceType === 'KIRBY' && targetPort === 'destination') {
      return false;
    }
    return true;
  }
}
