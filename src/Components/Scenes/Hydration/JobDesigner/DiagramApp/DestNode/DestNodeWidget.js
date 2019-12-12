import React from 'react';
import color from '@edma/design-tokens/js/color';
import { Typography } from '@material-ui/core';
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
        className={'dest-node'}
        style={{
          position: 'relative',
          width: size,
          height: size * 0.5,
          backgroundColor: color.white,
          borderRadius: '5%',
          border: `solid ${color['g500']} 1px`,
          borderLeft: `solid ${color['g500']} 5px`,
          padding: '8px'
        }}
      >
        <span style={{ color: color['t800'] }}>Destination</span>
        <Typography variant="h6">{name}</Typography>
        <div
          style={{
            position: 'absolute',
            height: size,
            zIndex: 10,
            right: size - 7,
            top: (size * 0.5) / 2 - 8
          }}
        >
          <DestPortWidget name="left" node={this.props.node} />
        </div>
      </div>
    );
  }
}
