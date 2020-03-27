import React from 'react';
import { transformHead } from '../Links/ArrowHead';
import { createCustomPath } from './helpers';

// TODO: convert to functional component if possible
class TransformLinkSegment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.style = { markerEnd: `url(#${transformHead})` };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.inversed !== this.props.inversed) {
      this.style = { markerEnd: `url(#${transformHead})` };
    }
  };

  render() {
    const { path, model } = this.props;
    const customPath = createCustomPath(model, path);

    return (
      <g className="Connection">
        <path
          className="Connection__transform-bg"
          ref={ref => (this.path = ref)}
          fill="none"
          strokeWidth={model.width * (3 / 2)}
          strokeLinecap="round"
          stroke="rgba(0,0,0,0)"
          d={customPath}
          style={this.style}
        />
        <path
          className="Connection__transform"
          fill="none"
          strokeWidth={model.width}
          stroke="rgba(255,0,0,0.5)"
          d={customPath}
        />
      </g>
    );
  }
}

export default TransformLinkSegment;
