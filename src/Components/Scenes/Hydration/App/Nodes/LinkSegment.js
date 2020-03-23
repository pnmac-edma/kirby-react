import React from 'react';

const LinkSegment = ({ path }) => {
  return (
    <path fill="none" strokeWidth={8} stroke="rgba(255,0,0,0.5)" d={path} />
  );
};

export default LinkSegment;
