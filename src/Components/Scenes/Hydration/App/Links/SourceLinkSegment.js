import React from 'react';
import { sourceHead } from '../Links/ArrowHead';
import { createCustomPath } from './helpers';

// TODO: convert to functional component if possible
class SourceLinkSegment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.style = { markerEnd: `url(#${sourceHead})` };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.inversed !== this.props.inversed) {
      this.style = { markerEnd: `url(#${sourceHead})` };
    }
  };

  render() {
    const { path, model } = this.props;
    const customPath = createCustomPath(model, path);

    return (
      <g className="Connection">
        <path
          className="Connection__source-bg"
          ref={ref => (this.path = ref)}
          className="Connection__source-bg"
          fill="none"
          strokeWidth={20}
          stroke="rgba(0,0,0,0)"
          d={customPath}
        />
        <path
          className="Connection__source"
          fill="none"
          strokeWidth={2}
          stroke="rgba(255,0,0,0.5)"
          d={customPath}
          style={this.style}
        />
      </g>
    );
  }
}

export default SourceLinkSegment;
