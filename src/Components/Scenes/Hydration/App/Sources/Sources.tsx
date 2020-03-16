import React from 'react';
import { color } from '@edma/design-tokens';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockSourcesData from '../../../../../State/__mockData__/mockSourcesMetadata.json'; // TODO: replace mockdata
import { AddNodeToDiagram } from '../../../../../State/Hydration/types';

type SourcesProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Sources = ({ addNodeToDiagram }: SourcesProps) => {
  const sourceItems = Object.entries(mockSourcesData).map(source => ({
    sourceType: source[0]
  }));

  return (
    <div className="Toolbar__list Toolbar__list--sources">
      {sourceItems.map((source, i) => (
        <ToolbarItemWidget
          key={`${source.sourceType}-${i}`}
          model={{ type: 'source', name: source.sourceType }}
          name={source.sourceType}
          color={color['c400']}
          onClick={() =>
            addNodeToDiagram(source.sourceType, { x: 400, y: 400 }, 'source')
          }
        />
      ))}
    </div>
  );
};

export default Sources;
