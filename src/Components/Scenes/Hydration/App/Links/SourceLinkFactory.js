import React from 'react';
import {
  AbstractLinkFactory,
  DefaultLinkModel
} from '@projectstorm/react-diagrams';
import SourceLinkSegment from './SourceLinkSegment';
import LinkWidget from './LinkWidget';

class SourceLinkFactory extends AbstractLinkFactory {
  constructor() {
    super('source');
  }

  generateModel() {
    return new DefaultLinkModel('source');
  }

  generateLinkSegment(model, selected, isPath, path) {
    return (
      <g>
        <SourceLinkSegment model={model} path={path} />
      </g>
    );
  }

  generateReactWidget(engine, model) {
    return <LinkWidget link={model} diagramEngine={engine} />;
  }
}

export default SourceLinkFactory;
