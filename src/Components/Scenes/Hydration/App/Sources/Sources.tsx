import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockSourcesData from '../../../../../State/__mockData__/mockSourcesMetadata.json';

type SourcesProps = {
  addNodeToDiagram: (
    type: string,
    x: number,
    y: number,
    subtype: string
  ) => void;
};

const Sources = ({ addNodeToDiagram }: SourcesProps) => {
  // NOTE: this will change depending on how the non-mock data is structured
  const sourceItems = Object.entries(mockSourcesData).map(source => ({
    name: source[0]
  }));

  return (
    <div>
      {sourceItems.map((source, i) => (
        <ToolbarItemWidget
          key={`${source.name}-i`}
          model={{ type: 'source' }}
          name={source.name}
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400, source.name)}
        />
      ))}
    </div>
  );
};

export default Sources;
