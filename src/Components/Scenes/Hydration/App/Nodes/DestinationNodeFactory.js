import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { DestinationNodeModel, DestinationNodeWidget } from '.';
import React from 'react';

export default class DestinationNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('destination');
  }

  generateReactWidget(diagramEngine, node) {
    return <DestinationNodeWidget node={node} />;
  }

  getNewInstance(initialConfig) {
    return new DestinationNodeModel();
  }
}
