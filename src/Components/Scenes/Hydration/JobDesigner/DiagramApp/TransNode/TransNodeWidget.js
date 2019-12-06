import React from 'react';
import { TransPortWidget } from './TransPortWidget';

export class TransNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className={'transNode'}
        style={{
          position: 'relative',
          width: this.props.size,
          height: this.props.size * 0.6,
          backgroundColor: 'white',
          borderRadius: '5%',
          border: 'solid #CA4ABE 1px',
          borderLeft: 'solid #CA4ABE 5px',
          borderRight: 'solid #CA4ABE 5px',
          textAlign: 'center',
          padding: '10px'
        }}
      >
        Transformation Node
        <div
          style={{
            position: 'absolute',
            height: this.props.size,
            zIndex: 10,
            right: this.props.size - 7,
            top: (this.props.size * 0.6) / 2 - 8
          }}
        >
          <TransPortWidget name="left" node={this.props.node} />
        </div>
        <div
          style={{
            position: 'absolute',
            height: this.props.size,
            zIndex: 10,
            left: this.props.size - 7,
            top: (this.props.size * 0.6) / 2 - 8
          }}
        >
          <TransPortWidget name="right" node={this.props.node} />
        </div>
      </div>
    );
  }
}
