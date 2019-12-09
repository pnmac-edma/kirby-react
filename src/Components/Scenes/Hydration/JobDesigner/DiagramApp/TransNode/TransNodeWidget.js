import React from 'react';
import { TransPortWidget } from '.';
import color from '@edma/design-tokens/js/color';

export default class TransNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props.node;
    return (
      <div
        className={'transNode'}
        style={{
          position: 'relative',
          width: size,
          height: size * 0.6,
          backgroundColor: 'white',
          borderRadius: '5%',
          border: `solid ${color['v400']} 1px`,
          borderLeft: `solid ${color['v400']} 5px`,
          borderRight: `solid ${color['v400']} 5px`,
          textAlign: 'center',
          padding: '10px'
        }}
      >
        Transformation Node {name}
        <div
          style={{
            position: 'absolute',
            height: size,
            zIndex: 10,
            right: size - 7,
            top: (size * 0.6) / 2 - 8
          }}
        >
          <TransPortWidget name="left" node={this.props.node} />
        </div>
        <div
          style={{
            position: 'absolute',
            height: size,
            zIndex: 10,
            left: size - 7,
            top: (size * 0.6) / 2 - 8
          }}
        >
          <TransPortWidget name="right" node={this.props.node} />
        </div>
      </div>
    );
  }
}
