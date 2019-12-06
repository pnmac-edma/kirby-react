import React from 'react';
import { PortWidget } from 'storm-react-diagrams';

export class DestPortWidget extends PortWidget {
  render() {
    return (
      <div
        style={
          {
            //height: '20px',
            //width: '5px',
            //backgroundColor: '#31AFDF',
          }
        }
        {...this.getProps()}
        onMouseEnter={() => {
          this.setState({ selected: true });
        }}
        onMouseLeave={() => {
          this.setState({ selected: false });
        }}
        data-name={this.props.name}
        data-nodeid={this.props.node.getID()}
      />
    );
  }
}
