import React from 'react';
import color from '@edma/design-tokens/js/color';
import { PortWidget } from '@projectstorm/react-diagrams';

export default class DestNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props;
    return (
      <div
        className={'dest-node'}
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
        <PortWidget node={this.props.node} />
      </div>
    );
  }
}
