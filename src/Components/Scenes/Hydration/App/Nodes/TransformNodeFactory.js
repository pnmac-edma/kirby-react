import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { TransformNodeModel, TransformNodeWidget } from '.';
import React from 'react';

export default class TransformNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('transform');
  }

  generateReactWidget(diagramEngine, node) {
    return <TransformNodeWidget node={node} />;
  }

  getNewInstance(initialConfig) {
    return new TransformNodeModel();
  }
}
