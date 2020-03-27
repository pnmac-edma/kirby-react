import React from 'react';

export const markerHead = 'markerHead';

const ArrowHead = props => {
  return (
    <svg viewBox="0 0 4 5">
      <defs>
        <marker
          id={markerHead}
          markerWidth="4"
          markerHeight="5"
          refX="3"
          refY="2.4"
          orient="0deg"
        >
          <path
            d="M4 2.5L0.25 4.66506L0.25 0.334936L4 2.5Z"
            style={{ fill: props.color }}
          />
        </marker>
      </defs>
    </svg>
  );
};

export default ArrowHead;
