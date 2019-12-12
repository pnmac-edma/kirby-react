import React from 'react';
import { SourcePortWidget } from '.';
import { Typography } from '@material-ui/core';
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
          border: `solid ${color['g500']} 1px`,
          borderLeft: `solid ${color['g500']} 5px`,
          padding: '8px'
        }}
      >
        <span style={{ color: color['c400'] }}>Source</span>
        <Typography variant="h6">{name}</Typography>
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
