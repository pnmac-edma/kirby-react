import { DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class LinkModel extends DefaultLinkModel {
  constructor() {
    super({
      type: 'standard',
      width: 10
    });
  }
}
