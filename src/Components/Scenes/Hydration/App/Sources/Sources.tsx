import React from 'react';
import { color } from '@edma/design-tokens';
import { useFormikContext } from 'formik';
import ToolbarItemWidget from '../Toolbar/ToolbarItemWidget';
import mockSourcesData from '../../../../../State/__mockData__/mockSourcesMetadata.json'; // TODO: replace mockdata
import {
  AddNodeToDiagram,
  InitialStateTypes
} from '../../../../../State/Hydration/types';

type SourcesProps = {
  addNodeToDiagram: AddNodeToDiagram;
};

const Sources = ({ addNodeToDiagram }: SourcesProps) => {
  const { values } = useFormikContext() as { values: InitialStateTypes };
  const { sources } = values;
  const { transforms } = values;

  const isKirbySourceAdded = Boolean(
    Object.values(sources).find(source => source.sourceType === 'KIRBY')
  );

  const isNonKirbySourceAdded =
    Object.values(sources).length > 0 && !isKirbySourceAdded;

  const isTransformAdded = Object.values(transforms).length > 0;

  // TODO: below is based on mock data; will need to change based on real data
  const sourceItems = Object.keys(mockSourcesData).map(source => ({
    sourceType: source,
    disabled:
      (source !== 'KIRBY' && (isKirbySourceAdded || isTransformAdded)) ||
      (source === 'KIRBY' && isNonKirbySourceAdded)
  }));

  return (
    <div className="Toolbar__list Toolbar__list--sources">
      {sourceItems.map((source, i) => (
        <ToolbarItemWidget
          key={`${source.sourceType}-${i}`}
          disabled={source.disabled}
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
