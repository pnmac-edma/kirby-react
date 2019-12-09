import { AbstractNodeFactory } from 'storm-react-diagrams';
import { SourceNodeModel, SourceNodeWidget } from '.';
import React from 'react';

export default class SourceNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('source');
  }

  generateReactWidget(diagramEngine, node, name, size) {
    return <SourceNodeWidget node={node} name={name} size={size} />;
  }

  getNewInstance() {
    return new SourceNodeModel();
  }
}
