import React from 'react';
import color from '@edma/design-tokens/js/color';
import { Typography } from '@material-ui/core';
import { PortWidget } from '@projectstorm/react-diagrams';

export default class DestNodeWidget extends React.Component {
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
          className={'dest-node'}
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
          <span style={{ color: color['t800'] }}>Destination</span>
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
      </div>
    );
  }
}
