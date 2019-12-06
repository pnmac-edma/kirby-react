import * as SRD from 'storm-react-diagrams';
import { SourceNodeWidget } from './SourceNodeWidget';
import { SourceNodeModel } from './SourceNodeModel';
import React from 'react';

export class SourceNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super('source');
  }

  generateReactWidget(diagramEngine, node) {
    return <SourceNodeWidget node={node} size={150} />;
  }

  getNewInstance() {
    return new SourceNodeModel();
  }
}
