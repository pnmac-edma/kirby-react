import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockSourcesData from '../../../../../State/__mockData__/mockSourcesMetadata.json'; // TODO: replace mockdata

type SourcesProps = {
  addNodeToDiagram: (type: string, x: number, y: number, name: string) => void;
};

const Sources = (props: SourcesProps) => {
  const { addNodeToDiagram } = props;

  const sourceItems = Object.entries(mockSourcesData).map(source => ({
    name: source[0]
  }));

  return (
    <div>
      {sourceItems.map((source, i) => (
        <ToolbarItemWidget
          key={`${source.name}-${i}`}
          model={{ type: 'source', name: source.name }}
          name={source.name}
          color={color['c400']}
          onClick={() => addNodeToDiagram('source', 400, 400, source.name)}
        />
      ))}
    </div>
  );
};

export default Sources;
