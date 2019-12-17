import React from 'react';
import color from '@edma/design-tokens/js/color';
import { PortWidget } from '@projectstorm/react-diagrams';

export default class SourceNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props.node;
    const height = size * 0.5;
    return (
      <div>
        <div
          className={'source-node'}
          style={{
            position: 'relative',
            width: size,
            height,
            backgroundColor: color.white,
            borderRadius: '5%',
            border: `solid ${color['c400']} 1px`,
            borderLeft: `solid ${color['c400']} 5px`,
            textAlign: 'center'
          }}
        >
          Source Node {name}
        </div>
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            top: height / 2 - 8,
            left: size - 8
          }}
        >
          <PortWidget name="right" node={this.props.node} />
        </div>
      </div>
    );
  }
}
