import React from 'react';
import color from '@edma/design-tokens/js/color';
import { PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';

export default class SourceNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props;
    return (
      <div
        className={'source-node'}
        style={{
          position: 'relative',
          width: size,
          height: size * 0.6,
          backgroundColor: color.white,
          borderRadius: '5%',
          border: `solid ${color['r300']} 1px`,
          borderLeft: `solid ${color['r300']} 5px`,
          textAlign: 'center'
        }}
      >
        Source Node {name}
        <PortWidget
          style={{
            top: this.props.size / 2 - 8,
            left: -8,
            position: 'absolute'
          }}
          port={this.props.node.getPort(PortModelAlignment.RIGHT)}
          engine={this.props.engine}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              zIndex: 10,
              background: 'white',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          />
        </PortWidget>
      </div>
    );
  }
}
