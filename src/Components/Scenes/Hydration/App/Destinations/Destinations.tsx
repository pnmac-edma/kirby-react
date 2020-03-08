import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import { AddNodeToDiagram } from '../../../../../State/Hydration/types';

type DestinationsProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Destinations = ({ addNodeToDiagram }: DestinationsProps) => {
  return (
    <ToolbarItemWidget
      model={{ type: 'destination' }}
      name="Destinations"
      color={color['c400']}
      onClick={() => addNodeToDiagram('', { x: 400, y: 400 }, 'destination')}
    />
  );
};

export default Destinations;
