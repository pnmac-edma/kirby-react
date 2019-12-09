import React from 'react';
import { SourcePortWidget } from '.';

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
          backgroundColor: 'white',
          borderRadius: '5%',
          border: 'solid #31AFDF 1px',
          borderRight: 'solid #31AFDF 5px',
          textAlign: 'center',
          padding: '10px'
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
