import React from 'react';

const LinkSegment = ({ path }) => {
  return (
    <path
      fill="none"
      // ref={ref => {
      //   path = ref;
      // }} // not sure what this is doing but ill keep for now
      strokeWidth={15}
      stroke="rgba(255,0,0,0.5)"
      d={path}
    />
  );
};

export default LinkSegment;
