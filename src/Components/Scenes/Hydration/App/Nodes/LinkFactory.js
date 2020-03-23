import React from 'react';
import { DefaultLinkFactory } from '@projectstorm/react-diagrams';
import { LinkModel, LinkSegment } from '.';

export default class LinkFactory extends DefaultLinkFactory {
  constructor() {
    super('standard');
  }

  generateModel() {
    return new LinkModel();
  }

  generateLinkSegment(model, selected, isPath, path) {
    return (
      <g>
        <LinkSegment path={path} />
      </g>
    );
  }
}
