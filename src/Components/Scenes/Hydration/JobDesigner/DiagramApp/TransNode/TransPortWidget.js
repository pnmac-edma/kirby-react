import React from 'react';
import { PortWidget } from 'storm-react-diagrams';

export default class TransPortWidget extends PortWidget {
  render() {
    return (
      <div
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
