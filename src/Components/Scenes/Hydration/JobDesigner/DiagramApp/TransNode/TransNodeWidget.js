import React from 'react';
import { Typography } from '@material-ui/core';
import { PortWidget } from '@projectstorm/react-diagrams';
import color from '@edma/design-tokens/js/color';

export default class TransNodeWidget extends React.Component {
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
          className={'trans-node'}
          style={{
            position: 'relative',
            width: size,
            height,
            backgroundColor: color.white,
            borderRadius: '5%',
            border: `solid ${color['g500']} 1px`,
            borderLeft: `solid ${color['g500']} 5px`,
            padding: '8px'
          }}
        >
          <span style={{ color: color['v400'] }}>Transform</span>
          <Typography variant="h6">{name}</Typography>
        </div>
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            top: height / 2 - 8,
            left: -8
          }}
        >
          <PortWidget name="left" node={this.props.node} />
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
