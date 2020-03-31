import { DefaultLinkModel, PortModel } from '@projectstorm/react-diagrams';

export default class TransformPortModel extends PortModel {
  constructor(position) {
    super(position, 'transform');
  }

  createLinkModel() {
    // limits to one outbound connection per node
    const linkList = Object.values(this.links);
    if (linkList.length > 0) {
      linkList[0].remove();
    }
    return new DefaultLinkModel('transform');
  }
}
