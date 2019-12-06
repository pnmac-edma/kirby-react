import * as SRD from 'storm-react-diagrams';
import { TransNodeWidget } from './TransNodeWidget';
import { TransNodeModel } from './TransNodeModel';
import React from 'react';

export class TransNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super('trans');
  }

  generateReactWidget(diagramEngine, node) {
    return <TransNodeWidget node={node} size={150} />;
  }

  getNewInstance() {
    return new TransNodeModel();
  }
}
