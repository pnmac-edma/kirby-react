import React from 'react';
import { PortWidget } from '@projectstorm/react-diagrams';

export default class SourceNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, size } = this.props.node;
    const height = size * 0.5;
    return (
      <div>
        <div className={'Tile Tile__source'}>
          <div className="Tile__inner">
            <div className="Tile__source-title">Source</div>
            <div>{name}</div>
          </div>
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
