import { AbstractLinkFactory } from '@projectstorm/react-diagrams';

export default class SimpleLinkFactory extends AbstractLinkFactory {
  constructor(type, cb) {
    super(type);
    this.cb = cb;
  }

  generateModel(initialConfig) {
    return this.cb(initialConfig);
  }
}
