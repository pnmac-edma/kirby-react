import React from 'react';
import { SourcePortWidget } from '.';
import color from '@edma/design-tokens/js/color';

export default class SourceNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props.node;
    return (
      <div
        className={'sourceNode'}
        style={{
          position: 'relative',
          width: size,
          height: size * 0.6,
          backgroundColor: color.white,
          borderRadius: '5%',
          border: `solid ${color['c400']} 1px`,
          borderRight: `solid ${color['c400']} 5px`,
          textAlign: 'center'
        }}
      >
        Source Node {name}
        <div
          style={{
            position: 'absolute',
            height: size,
            zIndex: 10,
            left: size - 7,
            top: (size * 0.6) / 2 - 8
          }}
        >
          <SourcePortWidget name="right" node={this.props.node} />
        </div>
      </div>
    );
  }
}
