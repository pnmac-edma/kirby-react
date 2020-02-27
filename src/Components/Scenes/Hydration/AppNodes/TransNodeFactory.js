import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { TransNodeModel, TransNodeWidget } from '../AppNodes';
import React from 'react';

export default class TransNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('trans');
  }

  generateReactWidget(diagramEngine, node) {
    return <TransNodeWidget node={node} />;
  }

  getNewInstance(initialConfig) {
    return new TransNodeModel();
  }
}
