import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { DestNodeModel, DestNodeWidget } from '.';
import React from 'react';

export default class DestNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('dest');
  }

  generateReactWidget(diagramEngine, node) {
    return <DestNodeWidget node={node} diagramEngine={diagramEngine} />;
  }

  getNewInstance(initialConfig) {
    return new DestNodeModel();
  }
}
