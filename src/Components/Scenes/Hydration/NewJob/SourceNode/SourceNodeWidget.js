import React from 'react';
import { SourcePortWidget } from './SourcePortWidget';

export class SourceNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.defaultProps = {
      size: 150,
      node: null
    };
  }

  render() {
    return (
      <div
        className={'sourceNode'}
        style={{
          position: 'relative',
          width: this.props.size,
          height: this.props.size * 0.6,
          backgroundColor: 'white',
          borderRadius: '5%',
          border: 'solid #31AFDF 1px',
          borderRight: 'solid #31AFDF 5px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: this.props.size,
            zIndex: 10,
            left: this.props.size - 7,
            top: (this.props.size * 0.6) / 2 - 8
          }}
        >
          <SourcePortWidget name="right" node={this.props.node} />
        </div>
      </div>
    );
  }
}
