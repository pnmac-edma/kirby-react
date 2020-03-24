import React from 'react';
import {
  AbstractLinkFactory,
  DefaultLinkWidget,
  DefaultLinkModel
} from '@projectstorm/react-diagrams';

export class TransformLinkModel extends DefaultLinkModel {
  constructor() {
    super('transform');
  }
}

const TransformLinkSegment = ({ path }) => {
  return (
    <g className="Connection">
      <path
        className="Connection__transform-bg"
        fill="none"
        strokeWidth={20}
        stroke="rgba(0,0,0,0)"
        d={path}
      />
      <path
        className="Connection__transform"
        fill="none"
        strokeWidth={2}
        stroke="rgba(255,0,0,0.5)"
        d={path}
      />
    </g>
  );
};

export default class TransformLinkFactory extends AbstractLinkFactory {
  constructor() {
    super('transform');
  }

  generateModel() {
    return new TransformLinkModel();
  }

  generateLinkSegment(model, selected, isPath, path) {
    return (
      <g>
        <TransformLinkSegment path={path} />
      </g>
    );
  }

  generateReactWidget(engine, model) {
    return <DefaultLinkWidget link={model} diagramEngine={engine} />;
  }
}
