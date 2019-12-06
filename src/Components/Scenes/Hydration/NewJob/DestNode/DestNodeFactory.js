import * as SRD from 'storm-react-diagrams';
import { DestNodeWidget } from './DestNodeWidget';
import { DestNodeModel } from './DestNodeModel';
import React from 'react';

export class DestNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super('dest');
  }

  generateReactWidget(diagramEngine, node) {
    return <DestNodeWidget node={node} size={150} />;
  }

  getNewInstance() {
    return new DestNodeModel();
  }
}
