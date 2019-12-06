import React from 'react';
import { DestPortWidget } from './DestPortWidget';

export class DestNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={'destNode'}
        style={{
          position: 'relative',
          width: this.props.size,
          height: this.props.size * 0.6,
          backgroundColor: 'white',
          borderRadius: '5%',
          border: 'solid #EF736E 1px',
          borderLeft: 'solid #EF736E 5px',
          textAlign: 'center',
          padding: '10px'
        }}
      >
        Destination Node
        <div
          style={{
            position: 'absolute',
            height: this.props.size,
            zIndex: 10,
            right: this.props.size - 7,
            top: (this.props.size * 0.6) / 2 - 8
          }}
        >
          <DestPortWidget name="left" node={this.props.node} />
        </div>
      </div>
    );
  }
}
