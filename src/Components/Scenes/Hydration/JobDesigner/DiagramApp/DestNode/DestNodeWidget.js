import React from 'react';
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
        <div className={'Tile Tile__destination'}>
          <div className="Tile__inner">
            <div className="Tile__destination-title">Destination</div>
            <div>{name}</div>
          </div>
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
