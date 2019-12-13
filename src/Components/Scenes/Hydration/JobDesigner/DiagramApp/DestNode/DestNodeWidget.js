import React from 'react';
import color from '@edma/design-tokens/js/color';
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
            border: `solid ${color['r300']} 1px`,
            borderLeft: `solid ${color['r300']} 5px`,
            textAlign: 'center'
          }}
        >
          Destination Node {name}
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
