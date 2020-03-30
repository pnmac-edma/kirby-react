import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { color } from '@edma/design-tokens';

export const sourceHead = 'sourceHead';
export const transformHead = 'transformHead';

const ArrowHead = () => {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 4 5">
      <defs>
        <marker
          id={sourceHead}
          markerWidth="6"
          markerHeight="4"
          refX="3"
          refY="2"
          orient="0deg"
        >
          <path
            d="M0,0 L0,4 L4,2 Z"
            style={{
              fill: theme.palette.type === 'light' ? color.b500 : color.b200
            }}
          />
        </marker>
        <marker
          id={transformHead}
          markerWidth="6"
          markerHeight="4"
          refX="3"
          refY="2"
          orient="0deg"
        >
          <path
            d="M0,0 L0,4 L4,2 Z"
            style={{
              fill: theme.palette.type === 'light' ? color.v400 : color.v300
            }}
          />
        </marker>
      </defs>
    </svg>
  );
};

export default ArrowHead;
