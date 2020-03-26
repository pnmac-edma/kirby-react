import React from 'react';

export const markerHead = 'markerHead';

const ArrowHead = () => {
  return (
    <svg>
      <defs>
        <marker
          id={markerHead}
          markerWidth="6"
          markerHeight="4"
          refX="3"
          refY="2"
          orient="0deg"
        >
          <path d="M0,0 L0,4 L4,2 Z" style={{ fill: 'orange' }} />
        </marker>
      </defs>
    </svg>
  );
};

export default ArrowHead;
