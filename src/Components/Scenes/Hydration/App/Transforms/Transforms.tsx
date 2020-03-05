import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockTransformsData from '../../../../../State/__mockData__/mockTransformsMetadata.json'; // TODO: change this to non-mock data when hitting the actual api

type TransformsProps = {
  addNodeToDiagram: (type: string, x: number, y: number, name: string) => void;
};

const Transforms = ({ addNodeToDiagram }: TransformsProps) => {
  return (
    <>
      {Object.values(mockTransformsData).map(({ name }, i) => (
        <ToolbarItemWidget
          key={`${name}-${i}`}
          model={{ type: 'trans', name: name }}
          name={name}
          color={color['c400']}
          onClick={() => addNodeToDiagram('trans', 400, 400, name)}
        />
      ))}
    </>
  );
};

export default Transforms;
