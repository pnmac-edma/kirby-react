import { DefaultLinkModel } from '@projectstorm/react-diagrams';

export default class LinkModel extends DefaultLinkModel {
  constructor() {
    super({
      type: 'vcx',
      width: 2
    });
  }
}
