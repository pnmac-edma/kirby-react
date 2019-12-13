import { AbstractNodeFactory } from '@projectstorm/react-diagrams';
import { SourceNodeModel, SourceNodeWidget } from '.';
import React from 'react';

export default class SourceNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('source');
  }

  generateReactWidget(diagramEngine, node) {
    return <SourceNodeWidget node={node} diagramEngine={diagramEngine} />;
  }

  getNewInstance(initialConfig) {
    return new SourceNodeModel();
  }
}
