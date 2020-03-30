import { DefaultLinkModel, PortModel } from '@projectstorm/react-diagrams';

export default class SourcePortModel extends PortModel {
  constructor(position) {
    super(position, 'source');
  }

  createLinkModel() {
    // limits to one outbound connection per node
    const linkList = Object.values(this.links);
    if (linkList.length > 0) {
      linkList[0].remove();
    }
    return new DefaultLinkModel('source');
  }
}
