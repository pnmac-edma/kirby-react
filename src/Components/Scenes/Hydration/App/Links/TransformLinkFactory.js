import React from 'react';
import {
  AbstractLinkFactory,
  DefaultLinkModel
} from '@projectstorm/react-diagrams';
import TransformLinkSegment from './TransformLinkSegment';
import LinkWidget from './LinkWidget';

class TransformLinkFactory extends AbstractLinkFactory {
  constructor() {
    super('transform');
  }

  generateModel() {
    return new DefaultLinkModel('transform');
  }

  generateLinkSegment(model, selected, isPath, path) {
    return (
      <g>
        <TransformLinkSegment model={model} path={path} />
      </g>
    );
  }

  generateReactWidget(engine, model) {
    return <LinkWidget link={model} diagramEngine={engine} />;
  }
}

export default TransformLinkFactory;
