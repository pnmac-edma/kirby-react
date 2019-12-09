import * as SRD from 'storm-react-diagrams';
import { DestNodeModel, DestNodeWidget } from '.';
import React from 'react';

export default class DestNodeFactory extends SRD.AbstractNodeFactory {
  constructor() {
    super('dest');
  }

  generateReactWidget(diagramEngine, node, name, size) {
    return <DestNodeWidget node={node} name={name} size={size} />;
  }

  getNewInstance() {
    return new DestNodeModel();
  }
}
