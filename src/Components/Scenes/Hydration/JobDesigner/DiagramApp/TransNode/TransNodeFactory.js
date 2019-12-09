import { AbstractNodeFactory } from 'storm-react-diagrams';
import { TransNodeModel, TransNodeWidget } from '.';
import React from 'react';

export default class TransNodeFactory extends AbstractNodeFactory {
  constructor() {
    super('trans');
  }

  generateReactWidget(diagramEngine, node, name, size) {
    return <TransNodeWidget node={node} name={name} size={size} />;
  }

  getNewInstance() {
    return new TransNodeModel();
  }
}
