import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';

type TransformsProps = {
  addNodeToDiagram: (type: string, x: number, y: number) => void;
};

const Transforms = ({ addNodeToDiagram }: TransformsProps) => {
  return (
    <ToolbarItemWidget
      model={{ type: 'trans' }}
      name="Transforms"
      color={color['c400']}
      onClick={() => addNodeToDiagram('trans', 400, 400)}
    />
  );
};

export default Transforms;
