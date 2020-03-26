import React from 'react';
import { markerHead } from '../Links/ArrowHead';
import { createCustomPath } from './helpers';

// TODO: convert to functional component if possible
class SourceLinkSegment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.style = { markerEnd: `url(#${markerHead})` };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.inversed !== this.props.inversed) {
      this.style = { markerEnd: `url(#${markerHead})` };
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
          fill="none"
          strokeWidth={model.width * (3 / 2)}
          strokeLinecap="round"
          stroke="rgba(0,0,0,0)"
          d={customPath}
          style={this.style}
        />
        <path
          className="Connection__source"
          fill="none"
          strokeWidth={model.width}
          stroke="rgba(255,0,0,0.5)"
          d={customPath}
        />
      </g>
    );
  }
}

export default SourceLinkSegment;
