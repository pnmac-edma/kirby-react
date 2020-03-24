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
    <path fill="none" strokeWidth={1} stroke="rgba(255,0,0,0.5)" d={path} />
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
