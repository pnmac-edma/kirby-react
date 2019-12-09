import React from 'react';
import color from '@edma/design-tokens/js/color';
import { DestPortWidget } from '.';

export default class DestNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props.node;
    return (
      <div
        className={'destNode'}
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
        Destination Node {name}
        <div
          style={{
            position: 'absolute',
            height: size,
            zIndex: 10,
            right: size - 7,
            top: (size * 0.6) / 2 - 8
          }}
        >
          <DestPortWidget name="left" node={this.props.node} />
        </div>
      </div>
    );
  }
}
