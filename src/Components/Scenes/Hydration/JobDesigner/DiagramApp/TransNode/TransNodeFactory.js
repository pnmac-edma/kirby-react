import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { TransNodeModel, TransNodeWidget } from '.';
import React from 'react';

export default class TransNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('trans');
  }

  generateReactWidget(diagramEngine, node) {
    return <TransNodeWidget node={node} diagramEngine={diagramEngine} />;
  }

  getNewInstance(initialConfig) {
    return new TransNodeModel();
  }
}
