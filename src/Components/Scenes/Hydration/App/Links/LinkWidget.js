import React from 'react';
import { DefaultLinkWidget } from '@projectstorm/react-diagrams';

class LinkWidget extends DefaultLinkWidget {
  generateLink(path, extraProps, id) {
    const { diagramEngine, link } = this.props;
    const { selected } = this.state;

    const Link = React.cloneElement(
      diagramEngine
        .getFactoryForLink(link)
        .generateLinkSegment(link, this, selected || link.isSelected(), path),
      {
        ...extraProps,
        strokeLinecap: 'round',
        'data-linkid': link.getID(),
        onContextMenu: event => {
          if (!this.props.diagramEngine.isModelLocked(link)) {
            event.preventDefault();
            link.remove();
          }
        }
      }
    );

    return <g key={'link-' + id}>{Link}</g>;
  }
}

export default LinkWidget;
