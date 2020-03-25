import React from 'react';
import {
  AbstractLinkFactory,
  DefaultLinkWidget,
  DefaultLinkModel
} from '@projectstorm/react-diagrams';

export class SourceLinkModel extends DefaultLinkModel {
  constructor() {
    super('source');
  }
}

const SourceLinkSegment = ({ path }) => {
  return (
    <g className="Connection">
      <path
        className="Connection__source-bg"
        fill="none"
        strokeWidth={20}
        stroke="rgba(0,0,0,0)"
        d={path}
      />
      <path
        className="Connection__source"
        fill="none"
        strokeWidth={2}
        stroke="rgba(255,0,0,0.5)"
        d={path}
      />
    </g>
  );
};

export default class SourceLinkFactory extends AbstractLinkFactory {
  constructor() {
    super('source');
  }

  generateModel() {
    return new SourceLinkModel();
  }

  generateLinkSegment(model, selected, isPath, path) {
    return (
      <g>
        <SourceLinkSegment path={path} />
      </g>
    );
  }

  generateReactWidget(engine, model) {
    return <DefaultLinkWidget link={model} diagramEngine={engine} />;
  }
}
