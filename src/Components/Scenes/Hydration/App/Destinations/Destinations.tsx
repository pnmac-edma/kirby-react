import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';

type DestinationsProps = {
  addNodeToDiagram: (type: string, x: number, y: number) => void;
};

const Destinations = ({ addNodeToDiagram }: DestinationsProps) => {
  return (
    <ToolbarItemWidget
      model={{ type: 'dest' }}
      name="Destinations"
      color={color['c400']}
      onClick={() => addNodeToDiagram('dest', 400, 400)}
    />
  );
};

export default Destinations;
