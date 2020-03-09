import React from 'react';
import color from '@edma/design-tokens/js/color';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockSourcesData from '../../../../../State/__mockData__/mockSourcesMetadata.json'; // TODO: replace mockdata
import { AddNodeToDiagram } from '../../../../../State/Hydration/types';

type SourcesProps = {
  addNodeToDiagram: AddNodeToDiagram;
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
          onClick={() =>
            addNodeToDiagram(source.name, { x: 400, y: 400 }, 'source')
          }
        />
      ))}
    </div>
  );
};

export default Sources;
