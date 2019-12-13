import { AbstractPortFactory } from '@projectstorm/react-diagrams';

export class SimplePortFactory extends AbstractPortFactory {
  constructor(type, cb) {
    super(type);
    this.cb = cb;
  }

  generateModel(initialConfig) {
    return this.cb(initialConfig);
  }
}
